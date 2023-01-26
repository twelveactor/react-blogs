import React,{memo,useState} from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload,message,Modal} from 'antd';
import {
  ArticleCover
} from '../../service/article'

// 通过 FileReader API 中的 readAsDataURL 读取 base64 规格图片
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const UploadComponent = memo(function (props) {

  const [messageAPI,contextHolder] = message.useMessage()
  // const [uploadBtnIsSuccess, setUploadBtnIsSuccess] = useState(false); // 上传按钮的控制
  const [removeImg,setRemoveImg] = useState('')
  const {upload} = props // 子传父 函数

  // 预览图片
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const fileList = [
    {
      name: '',
      status: '',
      url: '',
      thumbUrl: ''
    }
  ];

  /**
   * @name handleUpload
   * @param {Object} file 上传的文件信息
   * @desc 自定义上传
   */
  const handleUpload = async (file ) => {
    // console.log(file)
    //文件校验
    if (!beforeUpload) {
      return
    }

    if (file.file.status === 'done') {
      // console.log(file)
      const result = file.file.response
      result.fileInfo = file.file // 多存储一个base64编码的信息

      if (result.state) {
        // 图片存储数据库成功，将成功上传字段发送给 父组件，让其插入文章id
        upload(result) // 父传子
        // setUploadBtnIsSuccess(true) // 禁用按钮
        setRemoveImg(result.data[0].insertId) // 保存上传成功 图片 插入的 id
        message.success('上传图片成功')

      } else {
        message.error('上传图片失败')
      }
    }else if (file.file.status === 'removed') {
      // 删除 上传 封面


    }
  }
  //上传文件校验
  function beforeUpload(file) {
    //类型判断
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg'
    if (!isJpgOrPng) {
      messageAPI.open({
        type:'error',
        content:'请上传图片类型文件！(jpeg/png/jpg)！'
      })
      return false
    }
    //容量判断
    const isLt2M = file.size / 1024 / 1024 < 10
    if (!isLt2M) {
      messageAPI.open({
        type:'error',
        content:'图片大小不得超过10M！'
      })
      return false
    }
    return true
  }
  // 删除上传图片
  const handleRemove = async (file) => {
    console.log('file',file)
    console.log(removeImg)
    if (!removeImg) return
    // 删除 上传 图片
    const res = await ArticleCover(removeImg)
    console.log(res)
    upload(res) // 父传子
    message.success(res.message)
  }
  const handlePreview = async (file) => {
    // console.log(file)
    file.preview = await getBase64(file.originFileObj);
    // console.log(file.preview)
    setPreviewImage(file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    // const res = file.response.data[0].insertId
    // window.open(`http://localhost:8001/upload/${res}/cover`);
  }
  const handleCancel = () => setPreviewOpen(false);

  return (
    <>
      <Upload
        // action='http://localhost:8001/upload/cover'
        action='http://124.221.221.2:8002/upload/cover'
        listType="picture"
        name='cover'
        defaultFileList={[...fileList]}
        className="upload-list-inline"
        maxCount={1}
        onChange={handleUpload}
        accept='image/*' /*限制上传图片类型文件*/
        beforeUpload={async (file) => {
          /*上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传*/
          // const res = await handleUpload(file)/*自定义上传*/
          // return res/*阻止组件自带上传事件*/
        }}
        onRemove={handleRemove}
        // disabled={uploadBtnIsSuccess} // 如果已上传成功就禁用上传功能
        onPreview={handlePreview}
      >
        {/*{*/}
        {/*  uploadBtnIsSuccess ? <Button icon={<UploadOutlined />} disabled>上传封面</Button>:<Button icon={<UploadOutlined />}>上传封面</Button>*/}
        {/*}*/}
        <Button icon={<UploadOutlined />}>上传封面</Button>
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
      {contextHolder}
    </>
  )
})


export default UploadComponent;
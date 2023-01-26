import React, { useState ,memo,useEffect} from 'react';
import {UploadOutlined} from '@ant-design/icons';
import { message, Upload ,Button} from 'antd';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};
const UploadHead = memo((props) => {
  // const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const {imgUrls} = props

  // 子传父 将转换之后的头像发送出去
  useEffect(() => {
    imgUrls(imageUrl)
  }, [imageUrl]);


  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      // setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        // setLoading(false);
        setImageUrl(url);
      });
    }
  };
  // const uploadButton = (
  //   <div>
  //     {loading ? <LoadingOutlined /> : <PlusOutlined />}
  //     <div
  //       style={{
  //         marginTop: 8,
  //       }}
  //     >
  //       Upload
  //     </div>
  //   </div>
  // );
  return (
    <Upload
      name="head"
      listType="picture"
      className="avatar-uploader"
      showUploadList={false}
      // action="http://localhost:8001/upload/head"
      action="http://124.221.221.2:8002/upload/head"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      <Button type={"primary"} icon={<UploadOutlined />}>头像{imageUrl ? '更换':'上传'}</Button>
    </Upload>
  );
})
export default UploadHead;
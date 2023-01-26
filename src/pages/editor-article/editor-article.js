import React, {memo, useEffect, useRef, useState} from 'react'
import {EditorArticleWrapper} from "./style";
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { Button,message,Select  } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import {
  defaultEditorState
} from './config'
import { Input } from 'antd';
import {useNavigate} from "react-router-dom";
import {
  ArticlePublic,
  patchCover
} from '../../service/article'
import UploadComponent from '../../components/upload/upload'
import {
  useWindowSize
} from '../../utils/useWindowSize'

const { TextArea } = Input;
// 标签选择器参数
const options = [
  {value:'Html',label:'Html'},
  {value:'Css',label:'Css'},
  {value:'Javascript',label:'Javascript'},
  {value:'React',label:'React'},
  {value:'Vue',label:'Vue'},
  {value:'NodeJs',label:'NodeJs'},
  {value:'Java',label:'Java'},
  {value:'Python',label:'Python'},
  {value:'Koa2',label:'Koa2'},
]
const EditorArticle = memo(function () {
  const [text, setText] = useState(defaultEditorState)
  const [title,setTitle] = useState('') // 标题
  const [dec,setDec] = useState('') // 描述
  const [editorContent,setEditorContent] = useState({
    editorText:'',
    previewText:''
  }) // 保存存储编辑器内容
  const [editorSave,setEditorSave] = useState(false) // 判断修改编辑器内容是否保存
  const [messageApi, contextHolder] = message.useMessage(); // 全局消息提示
  const editorContentRef = useRef() // 异步通过 ref 暂存数据
  const navigate = useNavigate()
  const editorRef = useRef(); // 编辑器实例
  const [uploadObject,setUploadObject] = useState({}) // 子传父，上传图片成功后在数据库中的id
  const headerHeight = useRef() // 获取头部div实例高度
  // const [headerHeightInfo,setHeaderHeightInfo] = useState() // header 高度
  const {height} = useWindowSize() // 页面高度
  const [tags,setTags] = useState([]) // 文章标签分类
  // 动态计算 edit 内容高度
  // useEffect(()=>{
  //   // console.log(headerHeight.current.offsetHeight,height)
  //   setHeaderHeightInfo(headerHeight.current.offsetHeight)
  // },[height])

  // 解决 state 异步不能立即拿到最新的数据，利用 ref ，state 发生改变同时将值映射到 ref
  // ref 的改变不会触发页面更新，但在异步中一定能拿到最新值，所以需要在页面上用就使用 state，在异步逻辑中用就使用 ref
  useEffect(()=>{
    editorContentRef.current = editorContent
    // console.log(editorContentRef.current)
    // console.log(editorSave)
  },[editorContent])

  MdEditor.config({
    markedOptions: { breaks: true }
  });

  // 保存编辑器 编辑样式v and 展示样式h
  const onEditorSava = async (v,h) => {
    let preText = await h
    setEditorContent({
      editorText:v,
      previewText: preText
    })
    // 点击保存
    setEditorSave(true)
  }
  useEffect(() => {
    setEditorSave(false)
    // console.log(editorSave)
  }, [text]);


  // 标题输入框
  const onChangeTitle = (e) => {
    if (e.target.value !== 0){
      setTitle(e.target.value)
    }
    // console.log('title:', e.target.value);
    // console.log(editorContent)
  }

  const onChangeDec = (e) => {
    if (e.target.value !== 0){
      setDec(e.target.value)
    }
    // console.log('dec:', e.target.value);
  };

  // 发布文章按钮
  const handlePublicArticle = async () => {
    if (title.length === 0){
      return MessageTip('error','标题不能为空!!!')
    }
    if (dec.length === 0){
      return MessageTip('error','描述不能为空!!!')
    }
    if (tags.length === 0){
      return MessageTip('error','请选择分类标签!!!')
    }
    if (!editorSave) {
      return MessageTip('error','文章未保存，请保存再提交!!!')
    }
    if (editorContent.editorText.length <= 20){
      return MessageTip('error','文章内容太少，请编辑内容!!!')
    }
    // 检测 是否上传图片
    if (Object.prototype.isPrototypeOf(uploadObject) && Object.keys(uploadObject).length === 0){
      return MessageTip('error','请上传封面')
    }
    if (uploadObject.message === '删除成功'){
      return MessageTip('error','请上传封面')
    }

    // console.log(title,dec)
    // console.log(editorContent.editorText)
    // console.log(editorContent.previewText)
    // console.log(uploadObject)
    // console.log(tags)

    // 保存文章
    const res = await ArticlePublic(title,dec,tags,editorContent.editorText)
    // console.log(res.data[0].insertId)
    const articleId = res.data[0].insertId         // 文章id
    const coverId = uploadObject.data[0].insertId  // 上传图片 id
    if (!res.state) {
      return  MessageTip('error',res.message)
    }
    // 更新 cover 的发布文章id 及 base64 编码
    const patchRes = await patchCover(coverId,articleId)
    // console.log(patchRes)

    if (!patchRes.state){
      return  MessageTip('error',res.message)
    }

    MessageTip('success','文章发布成功')
    navigate('/main')
  }

  function MessageTip(type,message){
    messageApi.open({
      type: type,
      content: message,
    });
  }

  // 返回
  const handleBack = () => {
    navigate(-1)
  }

  // 子传父，接收 upload 上传文件的图片信息存储数据库
  const uploadInfo = (uploadFile) => {
    // console.log(uploadFile)
    // 将父亲传递的 文件信息存储
    setUploadObject(uploadFile)
  }

  // 标签选择 操作
  const selectTagChange = (value) => {
    // console.log(value)
    // 设置标签
    setTags(value)
  }

  return (
    <EditorArticleWrapper editHeight={height}>
      <div className="header-editor" ref={headerHeight}>
        <div className={'header-handle'}>
          <div className={'back'}>
            <Button type="dashed" shape="circle" icon={<LeftOutlined />} onClick={handleBack}/>
          </div>
          <div className={'public'}>
            <Button type="primary" onClick={handlePublicArticle}>发表文章</Button>
          </div>
        </div>
        <div className={'header-title'}>
          <h3>文章标题:</h3>
          <Input showCount
                 maxLength={100}
                 onChange={onChangeTitle}
                 value={title}
                 status={title.length !== 0 ? '':'error'}
                 placeholder={'请输入文章标题（0-20个字）'}/>
          <br />
          <br />
          <h3>描述:</h3>
          <TextArea showCount
                    maxLength={200}
                    onChange={onChangeDec}
                    value={dec}
                    status={dec.length === 0 ? 'error':''}
                    placeholder={'请输入文章描述（0-100个字）'}/>
          {/*<div className={'select-tags'}>*/}
          <br />
            <h3>分类标签:</h3>
            <Select
              mode="tags"
              style={{
                width: '100%',
              }}
              showArrow
              placeholder="请选择你这篇文章所设计的分类,如 html , vue ,react"
              onChange={selectTagChange}
              options={options}
            />
          {/*</div>*/}
        </div>

        <div className={'upload'}>
          <UploadComponent  upload={uploadInfo}/>
        </div>
      </div>
      <div className="md-editor">
        <MdEditor
          modelValue={text} // md 编辑内容
          onChange={setText} // 预览页面同步更新编辑内容
          noPrettier={true} // 是否启用 prettier 优化 md 内容
          previewTheme={'mk-cute'} // 预览内容主题，自定义主题规则见下方 'default' | 'github' | 'vuepress' | 'mk-cute' | 'smart-blue' | 'cyanosis'
          showCodeRowNumber={true} // 代码块是否显示行号
          codeStyleReverse={true}
          codeStyleReverseList={['default', 'mk-cute','atom']}// 代码块为暗色背景的预览主题
          autoDetectCode={true} // 是否启用自动识别粘贴代码类别，目前仅支持从vscode复制的内容
          onSave={onEditorSava}
          ref={editorRef}
          noUploadImg={true} //不展示上传图片选项

        />
      </div>
      {contextHolder}
    </EditorArticleWrapper>
  )
})

export default EditorArticle
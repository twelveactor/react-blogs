import React, {memo, useEffect, useState} from 'react'
import {FireTwoTone, LikeTwoTone, MessageTwoTone, SoundTwoTone, TagTwoTone} from "@ant-design/icons";
import {Tag,Badge} from "antd";
import {ArticleItemWrapper} from "./style";
import {useNavigate} from "react-router-dom";
import {gracefulText} from './config'

const urlToBase64 = (url) => {
  return new Promise ((resolve,reject) => {
    let image = new Image();
    image.onload = function() {
      let canvas = document.createElement('canvas');
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      // 将图片插入画布并开始绘制
      canvas.getContext('2d').drawImage(image, 0, 0);
      // result
      let result = canvas.toDataURL('image/png')
      resolve(result);
    };
    // CORS 策略，会存在跨域问题https://stackoverflow.com/questions/20424279/canvas-todataurl-securityerror
    image.setAttribute("crossOrigin",'Anonymous');
    image.src = url;
    // 图片加载失败的错误处理
    image.onerror = () => {
      reject(new Error('图片流异常'));
    };
  })
}

const ArticleItemRight = memo(function (props) {
  const [tags, setTags] = useState([]);
  const [imgBase64, setImgBase64] = useState('');
  const [randomColor] = useState(['magenta','red','volcano','orange','gold','lime','green','cyan','blue','geekblue','purple']);
  const { item } = props
  const navigate = useNavigate()
  let colorIndex = Math.floor(Math.random() * randomColor.length - 1)
  let index = Math.floor(Math.random() * gracefulText.length - 1)

  urlToBase64(item.coverInfo.imgURL).then(res => {
    // 转化后的base64图片地址
    // console.log('base64', res)
    setImgBase64(res)
  })


  useEffect(()=>{
    setTags( JSON.parse(item.tags) || [])
  },[item])

  const handleToArticle = () => {

    // console.log(item)
    // console.log('right')
    navigate('/article',{state : item})
  }

  const handleImgLoad = (e) => {
    // console.log(e)
  }

  return (
    <ArticleItemWrapper key={item.id} onClick={handleToArticle}>
      <Badge.Ribbon text={gracefulText[index] || '温故知新'} color={randomColor[colorIndex]}>
      <div className={'blogs-item'}>
        <div className={'item-dec double-text'}>
          <div className={'create-time'}>
            <SoundTwoTone />
            <p className={'time text-nowrap'}>发布于:{item.createAt || '未知'}</p>
          </div>
          <p className={'name title-text'}>{item.title || '未知'}</p>
          <div className={'other'}>
            <div className={'other-style'}>
              <FireTwoTone twoToneColor="#eb2f96" style={{marginRight: '5px'}}/>
              热度
            </div>
            <div className={'other-style'}>
              <MessageTwoTone twoToneColor="#eb2f96" style={{marginRight: '5px'}}/>
              评论
            </div>
            <div className={'other-style'}>
              <LikeTwoTone twoToneColor="#eb2f96" style={{marginRight: '5px'}}/>
              点赞
            </div>
          </div>
          <p className={'dec double-text'}>{item.des || '未知'}</p>
          <div className={'tags'}>
            {
              // JSON.parse(item.tags).map(tag=>{
              tags.map(tag=>{
                // console.log(tag)
                return (
                  <Tag icon={<TagTwoTone twoToneColor={'#fff'}/>} color="#cd201f" key={tag}>
                    {tag}
                  </Tag>
                )
              })
            }

          </div>
        </div>
        <div className={'item-img'}>
          {/*<img src={require(`../../assets/img/${item.imgUrl}`)}  alt="" className={'img'}/>*/}
          <img src={imgBase64 || 'https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg'}
               alt=""
               loading={'lazy'}
               className={'img'}
               onLoad={handleImgLoad}/>
        </div>
      </div>
      </Badge.Ribbon>
    </ArticleItemWrapper>
  )
})

export default ArticleItemRight
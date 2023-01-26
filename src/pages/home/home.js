import React, {memo, useEffect, useState} from 'react'
import {Button} from "antd";
import {useNavigate} from 'react-router-dom'
import {
  useWindowSize
} from '../../utils/useWindowSize'
import Particle from '../../components/particle/particle'
// import * as THREE from 'three';

import {HomeWrapper} from './style'
import {useDispatch} from "react-redux";
import {
  changeArticleListAction
} from '../../store/actionsCreators'

const Home =  memo(function () {
  /**
   * useState 状态管理
   */
  const [isHide,setIsHide] = useState(true)

  const navigate = useNavigate() // 获取跳转路由的方法
  const {width,height} = useWindowSize()

  const handleBtn = () => {
    setIsHide(false)
  }

  // 在加载 home 页面时就先把 博客 数据 请求下来
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(changeArticleListAction())
  },[dispatch])


  // 采用的 路由 加载页面，通过路由跳转其他页面
  // useNavigate 是 react-router-dom 提供的，只能在函数式组件中使用
  const handleToPage = () => {
    console.log('跳转进入主页面')
    navigate('/main')
  }


  return (
    <HomeWrapper height={height} width={width}>
      <div className={'intro'}>
        <p className={'headline'} onClick={handleBtn}>风起 花落 不闻 不问</p>
        <Button type="dashed"
                ghost={isHide}
                onClick={handleToPage}
                className={'btn-line'}>进入隐匿小世界</Button>
      </div>
      <Particle />
      {/*<div ref={canvasRef} className={'canvas-ref'}/>*/}
    </HomeWrapper>
  )
})

export default Home
import React,{memo,useRef} from 'react'
import {AboutWrapper} from "./style";
import { Carousel } from 'antd';
import {useWindowSize} from "../../utils/useWindowSize";
import { DownOutlined} from '@ant-design/icons';
// import {debounce} from "underscore";

const About = memo(function () {
  const {height,width} = useWindowSize()
  const carouselRef = useRef();

  // 监听鼠标滚轮滚动事件
  // useEffect(()=>{
  //  window.addEventListener('mousewheel',onMouseWheel)
  //   return () => {
  //    window.removeEventListener('mousewheel',onMouseWheel)
  //   }
  // },[carouselRef])
  // const onMouseWheel = debounce((e) => {
  //   // console.log(e.wheelDelta)
  //   // 判断是向上还是向下
  //   e.wheelDelta > 0 ? carouselRef.current.prev() : carouselRef.current.next()
  // },450,true)


  // 点击切换下一张轮播图
  const onPreClick = () => {
    carouselRef.current.next()
  }
  return (
    <AboutWrapper height={height} width={width}>
      <Carousel dots={false}
                draggable={true}
                infinite={true}
                autoplay={false}
                className={'swiper'}
                effect='fade'
                ref={carouselRef}
               >

        <div className={'item2'}>
          <div className={'content'}>
            <div className="flip-card" style={{width:'90%',height:'70vh'}}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">🍀个人简介</p>
                  <span style={{textIndent:"4px",color:'#420000'}}>🧬 坐标🌏，永远热爱, 永远年轻, 温故而知新，毕竟思而不学则妄，学而不思则殆 <br /></span>
                  <span style={{textIndent:"4px",color:'#421e00'}}>🧬 对一切新鲜的事物充满好奇🧐<br /></span>
                  <span style={{textIndent:"4px",color:'#224200'}}>🧬 <b>目标是成为一名出色的前端工程师💪</b><br /></span>
                  <span style={{textIndent:"4px",color:'#00420d'}}>🧬 <b>对自己的要求是每天都要比昨天进步一“奈奈”（点点）👊</b><br /></span>
                  <span style={{textIndent:"4px",color:'#00420d'}}>🧬 <b>github地址：<a href="https://github.com/twelveactor">https://github.com/twelveactor</a> 👊</b><br /></span>
                  <br />
                  <p className="title">🌌 博客简介</p>
                  <span>🎄 博客技术栈为：<br /></span>
                  <span style={{textIndent:"20px",color:'#040042'}}><b>React 前端全家桶</b>,第三方库有 <b>Axios , Ant Design , threeJs , react-pdf ,underscore</b></span>
                  <span style={{textIndent:"20px",color:'#00420f'}}>工具类 underscore 做一些防抖节流操作,three.js 与 react 结合的一些3D小demo, 通过 Axios 进行前后端分离的通信 ，另外通过 react-pdf 来生成我自己的个人简历，</span>
                  <span style={{textIndent:"20px",color:'#420000'}}><b>后台接口采用 RESTful 风格 ，所用框架为 nodeJs koa2框架搭建</b><br /></span>
                  <span>🎄 其他介绍：<br /></span>
                  <span style={{textIndent:"20px",color:'#003342'}}>其他也没啥可说的，这个项目即当毕设，也算是对自我学习成果的检验，整个项目完全自己搭建，功能模块也是想到写什么就写了什么<br /></span>
                  <span style={{textIndent:"20px",color:'#000d42'}}>写个简历生成功能模块也是想定制属于自己的简历样式，但是说实话没想到这个第三方库用起来挺麻烦的，不过也还算可以<br /></span>
                  <span style={{textIndent:"20px",color:'#040042'}}>学习threeJs也是看挺好玩的，但是现在是我找实习的关头，没啥时间要重新学习这个了，也就跟着官网文档练习熟悉熟悉<br /></span>
                  <span style={{textIndent:"20px",color:'#400042'}}>至于博客的话，我本人对优质文章是有比较狂热的收集癖，能放入到自己数据库中何乐而不为呢！<br /></span>
                  <span style={{textIndent:"20px",color:'#420000'}}>为什么不用vue呢！虽然但是 ， 我一开始就是从 vue2 -vue3 一路学习过来的，但是自从接触 react 的话我还是被其 自由不羁 的风格所吸引<br /></span>
                  <span style={{textIndent:"20px",color:'#423d00'}}>或许是我 比较菜 ，hhhhh ,总之慢慢学习好好学习吧，谁也不知道现在的路是好的还是坏的呢 .... <br /></span>

                  <br />

                  <p className="title">🔑 技能学习</p>
                  <img src={'https://skillicons.dev/icons?i=ts,js,html,css,py,mysql,md,vue,react,redux,sass,bootstrap,jquery,vite,c,eclipse,webpack,nodejs,nginx,jenkins,git,github,gitlab,vscode,idea,linux&theme=light'} alt=""/>
                  <br />
                  <p className="title">⭐ 碎碎念</p>
                  <span style={{textIndent:"20px",color:'#423d00'}}>🏀 “认真的生活，认真的做选择，并且为自己的选择负责，在自己擅长的领域努力的学习和工作，在自己的工作上尽可能的有所作为。</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={'item'}>
          <div className={'line1'}>
            <p>你好, <br /> 我是 <span style={{fontSize:'60px'}}>温故知新</span> ,欢迎光临本站！</p>
          </div>

          <div className={'content-item'}>
            <div className="flip-card" style={{width:'23%'}}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">生辰</p>
                </div>
                <div className="flip-card-back">
                  <p className="title">1999-11</p>
                </div>
              </div>
            </div>
            <div className="flip-card" style={{width:'23%'}}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">大学</p>
                </div>
                <div className="flip-card-back">
                  <p className="title">计算机科学与技术</p>
                </div>
              </div>
            </div>
            <div className="flip-card" style={{width:'23%'}}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">职业</p>
                </div>
                <div className="flip-card-back">
                  <p className="title">More money than work</p>
                </div>
              </div>
            </div>
            <div className="flip-card" style={{width:'23%'}}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p className="title">家住</p>
                </div>
                <div className="flip-card-back">
                  <p className="title">萍乡</p>
                </div>
              </div>
            </div>
            {/*<div className="flip-card" style={{width:'96%'}}>*/}
            {/*  <div className="flip-card-inner">*/}
            {/*    <div className="flip-card-front">*/}
            {/*      <p className="title">为什么建站？所用技术栈？</p>*/}
            {/*    </div>*/}
            {/*    <div className="flip-card-back">*/}
            {/*      <p className="des">Q&A 建站问题！</p>*/}
            {/*      <p className="des">闲来无事感觉学了这么久想要做出来点什么，于是就有了现在看到的这个网站！也是为了当毕业设计来完成！</p>*/}
            {/*      <p className="des">Q&A 所用技术栈！</p>*/}
            {/*      <p className="des">React 为框架，后端采用 NodeJs 提供接口</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>

        </div>

      </Carousel>

      <DownOutlined  className={'control'} onClick={onPreClick}/>
    </AboutWrapper>
  )
})

export default About
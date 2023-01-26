import 'antd/dist/reset.css';
import './assets/css/reset.css'
import {useEffect, useState,Suspense} from 'react'
import './App.css';
import { RollbackOutlined } from '@ant-design/icons';
import Loading from "./components/loading/loading";

// 通过 useRoutes 加载路由表
import routes from './router/index'
import {useLocation, useNavigate, useRoutes} from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [locationState,setLocationState] = useState(pathname);
  // 显示工具栏的路径页面
  const pathUrl = [
    '/editorArticle',
    '/personalResume/onlinePdf',
    '/personalResume/pdfGenerator',
    '/three/demo1',
    '/three/demo2',
    '/three/demo3',
    '/login',

    // '/three',
    // '/home',
    // '/main',
    // '/login',
    // '/article',
    // '/about',
  ]
  useEffect(()=>{
    setLocationState(pathname)
  },[pathname])

  const handleTitle = () => {
    navigate('/home')
  }
  // console.log(locationState)
  // console.log(locationState === '/editorArticle' ||  locationState === '/personalResume/onlinePdf')

  // 跳转 个人简历 页面
  const onToPersonal = () => {
    navigate('/personalResume')
  }
  // 跳转 three 页面
  const onToThreeJs = () => {
    navigate('/three')
  }
  // 跳转 about 页面
  const onToAbout = () => {
    navigate('/about')
  }
  const onToMusicProject = () => {
    window.open('http://124.221.221.2:90')
  }
  // 返回上一页
  const onBack = () => {
    navigate(-1)
  }

  return (
    // <Suspense fallback={<Skeleton active />}>
    <Suspense fallback={<Loading />}>
    <div className="App">
      {/* 当 跳转为某些页面时不显示 */}
      {
        // locationState === '/editorArticle' ||  locationState === '/personalResume/onlinePdf' || locationState === '/personalResume/pdfGenerator'
          pathUrl.find((item)=>{
            // console.log(item)
            // 判断跳转路径是否是自己想要不显示头部的
            return locationState.includes(item)
          })
          ?
          <></>
          :
          <div className={'app-header'}>
            <div className={'title'} onClick={event => locationState.includes('/article') ? onBack():handleTitle()}>
              <p className={'btn-grad text-nowrap'}>
                {
                  locationState.includes('/article') ? <RollbackOutlined />:'温故知新'
                }
              </p>
            </div>
            <div className={'other'}>
              <p className={'btn-grad text-nowrap'} onClick={onToPersonal}>个人简历生成器</p>
              <p className={'btn-grad text-nowrap'} onClick={onToThreeJs}>Three.js</p>
              <p className={'btn-grad text-nowrap'} onClick={onToMusicProject}>云音乐项目</p>
              <p className={'btn-grad text-nowrap'} onClick={onToAbout}>关于</p>
            </div>
          </div>
      }


      {/* 通过路由表访问页面 */}
      {useRoutes(routes)}


    </div>
      </Suspense>
  );
}

export default App;

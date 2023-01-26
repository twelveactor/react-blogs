import React, {memo, useEffect, useState} from 'react'

import {MainWrapper,LeftSiderWrapper,RightSiderWrapper,ContentWrapper} from './style'
import {Avatar,Card,Image,Button,Dropdown} from 'antd'
import { UserOutlined,GithubFilled } from '@ant-design/icons';
import {useWindowSize} from '../../utils/useWindowSize.js'
import {useNavigate,useLocation } from "react-router-dom";
import {useFormTimes} from '../../utils/formTimes'
import {
  authLogin
} from '../../service/login'
import {connect} from 'react-redux'
import localStorage from "../../utils/localStorage";


const Main = memo(function (props) {
  const [menuList] = useState(['html','css','javascript','vue','react']) // 菜单栏模拟数据
  const {height} = useWindowSize() // 自定义hook，获取浏览器宽高
  const navigate = useNavigate() // 路由跳转
  const location = useLocation()
  const {time,data,weekday} = useFormTimes()  // 自定义hook，获取当前时间
  const [user,setUser] = useState({})
  const [loginState,setLoginState] = useState(false)
  const [urls] = useState(location.pathname)


  useEffect(()=>{
    authLogin().then(res=>{
      // console.log(res)
      setLoginState(res.state)
      console.log(localStorage.getLocalStorage('user'))
      if (localStorage.getLocalStorage('user')) return setUser(localStorage.getLocalStorage('user'))
    })
  },[urls === '/main'])



  // 登录点击
  const handleLogin = () =>{
    if (!loginState){
      navigate('/login')
    }
  }
  const handleOutLogin = () =>{
    localStorage.clearCache()
    navigate('/login')
  }
  // 点击logo返回首页
  const handleNavigateHome = () => {
    navigate('/home')
  }
  const items = [
    {
      key: '1',
      label: ( loginState ? <p onClick={handleOutLogin}>退出登录</p>: <p>未登录</p>)
    }
  ]

  return(
    <MainWrapper height={height}>

      {/* 左侧边栏 */}
      <LeftSiderWrapper >
        <div className={'logo-name text-nowrap'} onClick={handleNavigateHome}>
          温故知新
        </div>
        {/* 导航栏 */}
        <div className={'left-menu'}>
          <div className={'menu'}>MENU</div>
          <ul className={'menu-list'}>
            {
              menuList.map(item=>{
                return <li key={item} className={'list-item'}>{item}</li>
              })
            }
          </ul>
        </div>
      </LeftSiderWrapper>

      {/* 内容 */}
      <ContentWrapper>
        main
      </ContentWrapper>

      {/* 右侧边栏 */}
      <RightSiderWrapper>
        {/* 顶部工具栏 */}
        <div className={'top-toolbar'}>
          <GithubFilled className={'git'}/>
          <Dropdown
            menu={{items}}
          placement="bottomLeft" arrow={{ pointAtCenter: true }}
          >
          <Avatar style={{backgroundColor: '#87d068'}}
                  icon={user.userImg ? <></>:<UserOutlined />}
                  className={'head-portrait'}
                  src={ user.userImg ? user.userImg:''}
                  onClick={handleLogin}
                  size={{
                    xs: 18,
                    sm: 20,
                    md: 25,
                    lg: 30,
                    xl: 35,
                    xxl: 40,
                  }}/>
          </Dropdown>
        </div>
        {/* 右侧信息 */}
        <div className={'right-content'}>
          <Card hoverable className={'card-custom'}>
            <Image width={200} src={user.userImg ? user.userImg:"https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"} className={'img'}/>
            <p className={'p-info'}>昵称 ： {user.name || '游客'}</p>
            <p className={'p-info'}>年龄 ： {user.level || '2000 岁'}</p>
            <p className={'p-info'}>粉丝 ： 暂无</p>
            <p className={'p-info'}>关注 ： 暂无</p>
            <Button type="dashed" block >+ 加关注</Button>
          </Card>
          <Card hoverable className={'card-custom-weather'}>
            <img src={require("../../assets/img/weather/winter.png")} alt="图片正在加载..." className={'img'}/>
            <div className={'weather-tag'}>
              <div className={'now'}>now</div>
              <div className={'now-time'}>{data}</div>
            </div>
            <div className={'weather-info'}>
              <p>{ time } {weekday} winter</p>
            </div>
          </Card>
        </div>
      </RightSiderWrapper>

    </MainWrapper>
  )
})

const mapStateToProps = (state) => ({
  user:state.users
})

export default connect(mapStateToProps)(Main)
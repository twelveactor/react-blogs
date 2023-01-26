import React, {memo,useState} from 'react'
import {LoginPageWrapper,LoginBackContainerWrapper} from './style'
import { Form, Input, Button,message } from 'antd';
import {useWindowSize} from '../../utils/useWindowSize'
import {useNavigate} from "react-router-dom";
import {debounce} from "underscore";
import {
  registerUser,
  login
} from '../../service/login'
import localStorage from '../../utils/localStorage'
import {
  changeUserInfoAction
} from '../../store/actionsCreators'

const Login = memo(function () {
  const navigate = useNavigate()
  const {height} = useWindowSize()
  const [form] = Form.useForm()
  const [loginState, setLoginState] = useState(true); // 控制 登陆注册改变 false 注册 true 登录
  const [validateState] = useState({
    name:'请输入6到16位（字母，数字，下划线，减号）',
    password:'至少6位，包括至少1个大写字母，1个小写字母，1个数字'
  })
  const [messageApi, contextHolder] = message.useMessage(); // 警示框


  // 防抖包裹一下
  const onInputChange = debounce((changedValues, allValues) => {
    // console.log(changedValues, allValues)
  },460)

  const handleSubmit = () => {
    form.validateFields().then(value => {
      console.log(value)
      form.submit()
    }).catch(err => {
      messageApi.open({
        type:'warning',
        content:'请检查数据格式！！！'
      })
      // 验证不通过时进入
      console.log(err);
    });

  }
  const onFinish = (values) => {
    console.log('Received values of form: ', values)

    // !false = true 注册 ！true = false 登录
    if (!loginState){
      registerUser(values).then(res=>{
        console.log('注册：',res)
        localStorage.deleteCache('token')
       if (res.code === 200){
         messageApi.open({
           type:'success',
           content:'用户注册成功，请登录~'
         })
       }
      }).catch(err=>{
        console.log(err)
      })
    }else{
      login(values).then(res=>{
        // 如果反覆登录 需要清楚 token
        // localStorage.clearCache()

        console.log(res)
        if (res.code !== 200){
          return  messageApi.open({
            type:'error',
            content:res.message
          })
        }


        // 将用户信息存储进入 store 中
        changeUserInfoAction(res.data)
        localStorage.setLocalStorage('token',res.token)
        localStorage.setLocalStorage('user',res.data)

        // 跳转
        console.log(res.message)
        messageApi.open({
          type:'success',
          content:'登录成功~'
        })
        navigate('/main')
      }).catch(err=>{
        console.log(err)
      })
    }

  }


  // 返回上一层
  const handleBackBtn = () => {
    navigate(-1)
  }
  // 控制 注册 登录 的显示
  const loginStateRegOrEnter = () => {
    setLoginState(!loginState)
    form.resetFields() // 清空输入框
  }

  return (
    <LoginBackContainerWrapper height={height} loginState={loginState}>
      {contextHolder}
      <div className="back-btn" onClick={handleBackBtn}>
        返回
      </div>
    <LoginPageWrapper loginState={loginState}>
      <div className={'back-img'}>
        <img src={require(`../../assets/img/login/${loginState ? 'login':'register'}.jpg`)} alt="错误" className={'img'}/>
      </div>
      <div className={'login-form'}>
        <div className={'menu'}>
          <div className="title">
            <p className={'reg'}>{loginState ? 'LOGIN':'REGISTRATION'}</p>
            <p className={'regs'} onClick={loginStateRegOrEnter}>{loginState ? '登录':'注册'}</p>
          </div>
          <div className={'name'}>
            {loginState ? '登录':'注册'}
          </div>
          <div className={'input-form'}>
            <Form form={form}
                  layout="vertical"
                  autoComplete="off"
                  onValuesChange={onInputChange}
                  onFinish={onFinish}>
              <Form.Item name="name" label="账号"
                         rules={[
                           {
                             required: true,
                             message:`${validateState.name}`,
                             pattern:/^[a-zA-Z0-9_-]{6,16}$/,
                             whitespace:true
                           },
                         ]}>
                <Input allowClear />
              </Form.Item>
              <Form.Item name="password" label="密码"
                         rules={[
                           {
                             required: true,
                             message: `${validateState.password}`,
                             whitespace:true,
                             pattern:/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/,
                             type:'string' | 'number'
                           },
                         ]}>
                <Input.Password allowClear autoComplete="on"/>
              </Form.Item>
              <Button type="primary" className={'btn'} onClick={handleSubmit}>
                {loginState ? '登录':'注册'}
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </LoginPageWrapper>
    </LoginBackContainerWrapper>
  )
})

export default Login

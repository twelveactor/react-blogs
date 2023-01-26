import request from './index'

export function registerUser(userInfo) {
  return request.post({
    url:'/users',
    data:{
      ...userInfo
    }
  })
}

export function login(userInfo){
  return request.post({
    url:'/login',
    data:{
      ...userInfo
    }
  })
}

export function authLogin(){
  return request.get({
    url:'/login'
  })
}
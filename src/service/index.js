import axios from 'axios'
import localStorage from '../utils/localStorage'

class RequestServer {
  constructor(baseURL,timeout){
    this.instance = axios.create({
      baseURL,
      timeout
    })

    this.instance.interceptors.request.use(config=>{

      config.headers.Authorization = localStorage.getLocalStorage('token')

      return config
    },err=>{
      return err
    })

    this.instance.interceptors.response.use(res=>{

      return res.data
    },err=>{

      return err
    })
  }

  request(config){
    return new Promise((resolve,reject)=>{
      this.instance.request(config).then(res=>{
        resolve(res)
      }).catch(err=>{
        reject(err)
      })
    })
  }

  get(config){
    return this.request({ ...config , method:'get'})
  }
  post(config){
    return this.request({ ...config , method:'post'})
  }
  delete(config){
    return this.request({ ...config , method:'delete'})
  }
  patch(config){
    return this.request({ ...config , method:'patch'})
  }

}

// export default new RequestServer('http://localhost:8001',10000)
export default new RequestServer('http://124.221.221.2:8002',10000)
import store from './index'
import * as constantType from './constant'
import {
  getArticleAll
} from '../service/mian'

const userInfoAction = (users) => ({
  type:constantType.USER_INFO,
  users
})
const articleListAction = (articleList) => ({
  type:constantType.ARTICLE_LIST,
  articleList
})

// 保存登录用户信息
export function changeUserInfoAction(users){
  store.dispatch(userInfoAction(users))
}

// 保存主页博客列表数据
export function changeArticleListAction(){
  return async (dispatch,getState) => {
    const res = await getArticleAll()
    if (res.state){
      // setArticleList(res.data[0])
      dispatch(articleListAction(res.data[0]))
    }
  }
}




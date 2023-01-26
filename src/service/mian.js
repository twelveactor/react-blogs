import Request from './index'

export function getArticleAll(){
  return Request.get({
    url:'/article/all'
  })
}
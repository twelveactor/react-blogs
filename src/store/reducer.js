import * as constantType from './constant'

const initialState = {
  users:{},
  articleList:[]
}

function reducer(state = initialState , action) {
  // console.log(action)
  switch (action.type){
    case constantType.USER_INFO:
      return {...state , users: action.users}
    case constantType.ARTICLE_LIST:
      return {...state, articleList: action.articleList}
    default:
      return state
  }
}

export default reducer
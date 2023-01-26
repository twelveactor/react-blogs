import {createStore,applyMiddleware,compose} from 'redux'

// 正常情况下 store.dispatch(object)
// 想要派发函数 store.dispatch(function) 通过 thunk
import thunk from 'redux-thunk'

import reducer  from './reducer'
// 开启浏览器redux插件的功能，建议开发阶段开启，生产阶段关闭
const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;



const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))

export default store
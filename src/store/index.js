import thunk from "redux-thunk";
import { createStore,applyMiddleware,combineReducers } from "redux";
import { reducer as homeReducer } from "../containers/Home/store";

const reducer = combineReducers({
	home:homeReducer,
})
export const getStore = () => {                  //这里是为了防止所有用户都使用同一个store
	return createStore(reducer,applyMiddleware(thunk));
}


//客户端渲染第一个页面时，直接使用注水的数据。
export const getClientStore = () => {
	const defaultState = window.context && window.context.state
	return createStore(reducer,defaultState,applyMiddleware(thunk))
}



import thunk from "redux-thunk";
import { createStore,applyMiddleware,combineReducers } from "redux";
import { reducer as homeReducer } from "../containers/Home/store";

const reducer = combineReducers({
	home:homeReducer,
})
const getStore = () => {                  //这里是为了防止所有用户都使用同一个store
	return createStore(reducer,applyMiddleware(thunk));
}



export default getStore

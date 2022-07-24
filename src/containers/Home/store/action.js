import axios from "axios"
import { CHANGE_LIST } from "./constants";
const ChangeList = (list) => ({
	type:CHANGE_LIST,
	list
})

export const getHomeList = (dispatch) => {
	return axios.get("http://localhost:3000/home.json")
		.then((res) => {
			const list = res.data.data.hotMovieList
			dispatch(ChangeList(list))
		})
}

export const getHomeList2 = (store) => {
	return axios.get("http://localhost:3000/home.json")
		.then((res) => {
			const list = res.data.data.hotMovieList
			store.dispatch(ChangeList(list))
		})
}

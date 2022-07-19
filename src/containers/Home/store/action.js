import axios from "axios"
import { CHANGE_LIST } from "./constants";

const ChangeList = (list) => ({
	type:CHANGE_LIST,
	list
})

export const getHomeList = (dispatch) => {
		axios.get("home.json")
			.then((res) => {
				const list = res.data.data.hotMovieList
				dispatch(ChangeList(list))
			})
}

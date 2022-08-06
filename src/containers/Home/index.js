import React,{useEffect} from "react";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getHomeList } from "./store/action";

const Home = () => {
	const name = useSelector(state => state.home.name);
	const list = useSelector(state => state.home.list)
	const dispatch = useDispatch();

	useEffect(() => {
		if(!list.length){
			getHomeList(dispatch)
		}
	},[])

	return <div>
		<Header/>
		<div>this is {name}</div>
		<button onClick={() => alert("click1")}>btn</button>
		<ul>
			{
				 list.map(item => {
				 	return <li key={item.id}>{item.name}</li>
				})
			}
		</ul>
	</div>
}


export default Home

//这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好
Home.loadData = (store) => {
	return getHomeList(store.dispatch)
}


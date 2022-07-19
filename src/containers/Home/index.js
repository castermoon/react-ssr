import React,{useEffect} from "react";
import Header from "../../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getHomeList } from "./store/action";

const Home = () => {
	useEffect(() => {
		getHomeList(dispatch)
	},[])

	const name = useSelector(state => state.home.name);
	const list = useSelector(state => state.home.list)
	const dispatch = useDispatch();
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

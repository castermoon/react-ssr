import React from "react"
import Home from "./containers/Home";
import Login from "./containers/Login"
export default [
	{
		path:'/',
		element:<Home/>,
		loadData: Home.loadData,
		key:"home",
		// children:[{
		// 	path:"ttt",
		// 	element:<Login />,
		// 	key:"ttt"
		// }]
	},{
		path:'/login',
		element:<Login/>,
		key:"login"
	}
]

// export default (
// 	<Routes>
// 		<Route path="/"  element={<Home/>}/>
// 		<Route path="/login"  element={<Login/>}/>
// 	</Routes>
// )

import express from "express"
import { render } from "./utils"
import { getStore } from "../store";
import {matchRoutes} from "react-router-dom";
import routes from "../Routes";

const app = express();
app.use(express.static("public"));

app.get("*", function (req, res) {
	const store = getStore()

	//获取跟url匹配的路由，然后把路由里面的loadData执行一遍，添加到store中
	//这样服务器端渲染就会有数据了。
	const matchedRoutes = matchRoutes(routes,req.path)

	//promises表示还在执行过程中的数据获取方法promise
	const promises = []
	matchedRoutes.forEach(item => {
		if(item.route.loadData){
			promises.push(item.route.loadData(store))
		}
	})

	//当所有promises执行完成后把再渲染页面并发送到客服端
	Promise.all(promises).then(() => {
		res.send(render(store,routes,req))
	})

})

let server = app.listen(3000);

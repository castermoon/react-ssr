import {renderToString} from "react-dom/server";
import {StaticRouter} from "react-router-dom/server";
import Routes from "../Routes";
import React from "react";
import { Provider } from "react-redux"
import getStore from "../store";

export const render = (req) => {

	const store = getStore()

	const content = renderToString((
		<Provider store={store}>
			<StaticRouter location={req.path} >
				{Routes}
			</StaticRouter>
		</Provider>
	))

	return (
		`
		<html>
		<head>
			<title>ssr</title>
		</head>
		<body>
			<div id="root">${content}</div>				
			<script src="/index.js"></script>
		</body>
		</html>
		`
	)
}


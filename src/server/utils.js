import {renderToString} from "react-dom/server";
import {StaticRouter} from "react-router-dom/server";
import Routes from "../Routes";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux"

export const render = (req) => {

	const reducer = (state = {name:"dell"},action) => {
		return state;
	}

	const store = createStore(reducer)

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

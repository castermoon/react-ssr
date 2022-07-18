import {renderToString} from "react-dom/server";
import {StaticRouter} from "react-router-dom/server";
import Routes from "../Routes";
import React from "react";

export const render = (req) => {
	const content = renderToString((
		<StaticRouter location={req.path} >
			{Routes}
		</StaticRouter>
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
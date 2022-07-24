import {renderToString} from "react-dom/server";
import {StaticRouter} from "react-router-dom/server";
import {Route,Routes} from "react-router-dom";
import React from "react";
import { Provider } from "react-redux"

export const render = (store,routes,req) => {
		const content = renderToString((
			<Provider store={store}>
				<StaticRouter location={req.path} >
					<Routes>
						{routes.map(route => {
							return <Route {...route}  />
						})}
					</Routes>
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
		</body>
		<script>
			window.context = {
				state:${JSON.stringify(store.getState())}
			}
		</script>
		<script src="/index.js"></script>
		</html>
		`
		)
}


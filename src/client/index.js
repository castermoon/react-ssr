import React from "react"
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter,Route,Routes } from "react-router-dom"
import routes from "../Routes"
import { Provider } from "react-redux"
import { getClientStore } from "../store";

const store = getClientStore()

const App = () => {
	return (
		<Provider store={getClientStore()}>
			<BrowserRouter >
				<Routes>
					{routes.map(route => {
						return <Route {...route}  />
					})}
				</Routes>
			</BrowserRouter>
		</Provider>
	)
}
const container = document.getElementById('root');
const root = hydrateRoot(container, <App />);


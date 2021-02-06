import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './hooks/routes.hook'
import './App.css'
import 'materialize-css'

function App() {
	
	const routes = useRoutes(false)

    return (
		<div className="container">
            {routes}
        </div>
    );
}

export default App;

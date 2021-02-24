import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './hooks/routes.hook'
import {useAuth} from "./hooks/auth.hook";
import './App.css'
import 'materialize-css'

function App() {
	const {login, logout, token, userId, ready} = useAuth()
	
	const routes = useRoutes(false)

    return (
            <Router>
                <div className="container">
                    {routes}
                </div>
            </Router>
    );
}

export default App;

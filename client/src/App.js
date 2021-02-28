import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from './hooks/routes.hook'
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {Navbar} from "./components/Navbar/Navbar";
import './App.css'
import 'materialize-css'

function App() {
	const {login, logout, token, userId, ready} = useAuth()
	const isAuthenticated = !!token
	const routes = useRoutes(isAuthenticated)

    return (
		<AuthContext.Provider value={{login, logout, token, userId, isAuthenticated}}>	
            <Router>
				{isAuthenticated && <Navbar/>}
                <div className="container">
                    {routes}
                </div>
            </Router>
        </AuthContext.Provider>
    );
}

export default App;

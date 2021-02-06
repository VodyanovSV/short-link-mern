import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import {LinksPage} from "../pages/linksPage/LinksPage";
import {CreatePage} from "../pages/create-page/CreatePage";
import {DetailPage} from "../pages/detail-page/DetailPage";
import {AuthPage} from "../pages/auth-page/AuthPage";
import Error from "../pages/error/Error";

export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/links" exact element={<LinksPage/>}/>
                <Route path="/create" exact element={<CreatePage/>}/>
                <Route path="/detail/:id" element={<DetailPage/>}/>
                <Route path="/error" element={<Error/>}/>
                <Route path="/" exact element={<CreatePage/>}/>
                <Route path="*" element={<Navigate to ="/error" />}/>
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/" exact element={<AuthPage/>}/>
            <Route path="*" element={<Navigate to ="/" />}/>
        </Routes>
    )
}
import React, { useEffect } from 'react'
import { Routes, Route, useNavigate, } from "react-router-dom"
import About from "../components/About/About"
import Detail from "../components/Detail/Detail"
import App from '../App'
import Error from '../views/error/Error'
import Form from '../components/Form/Form'
import Favorites from '../views/favorites/favorites'
export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Form />} />
                <Route path='/home' element={<App />} />
                <Route path='/favorites' element={< Favorites />} />
                <Route path='/about' element={<About />} />
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </>
    )
}

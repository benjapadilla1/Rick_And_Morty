import React from 'react'
import { Routes, Route } from "react-router-dom"
import About from "../components/About/About"
import Detail from "../components/Detail/Detail"
import App from '../App'
import Error from '../views/error/Error'
export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path='/home' element={<App />} />
                <Route path='/about' element={<About />} />
                <Route path='/detail/:id' element={<Detail />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </>
    )
}

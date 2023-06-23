import React, { useEffect, useState } from 'react'
import form from "./Form.module.css"
import validation from './validation'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

export default function Form() {
    const navigate = useNavigate()
    const [access, setAccess] = useState(false)
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    })
    function handleChange(e) {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        setErrors(validation({
            ...userData,
            [e.target.name]: e.target.value
        }))
    }
    useEffect(() => {
        !access && navigate("/")
    }, [!access])
    async function login(userData) {
        try {
            const { email, password } = userData
            const URL = "http://127.0.0.1:5174/rickandmorty/login"
            const { data } = await axios(URL + `?email=${email}&password=${password}`)
            const { access } = data
            setAccess(data)
            access && navigate("/home")
        }
        catch (error) {
            console.log("Error", error)
            alert("Ocurrió un error logeandote")
        }
    }
    function handleSubmit(e) {
        e.preventDefault()
        if (!errors.email && !errors.password) {
            login(userData)
        } else {
            alert("Datos incorrectos")
        }
    }

    return (
        <div className={form.backgroundDiv}>
            <form className={form.formContainer} onSubmit={handleSubmit} >
                <div className={form.formBody}>
                    <div className={form.group}>
                        <label className={form.formLabel}>Email:</label>
                        <input
                            type="email"
                            value={userData.email}
                            onChange={handleChange}
                            name="email"
                            className={form.input}
                        />
                        <p className={form.error}>{errors.email}</p>
                    </div>
                    <div className={form.group}>
                        <label className={form.formLabel}>Contraseña:</label>
                        <input
                            type="password"
                            value={userData.password}
                            onChange={handleChange}
                            name="password"
                            className={form.input}
                        />
                        <p className={form.error}>{errors.password}</p>
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

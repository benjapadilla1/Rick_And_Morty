import React, { useState } from 'react'
import form from "./Form.module.css"
import validation from './validation'
import { useNavigate } from 'react-router-dom'

export default function Form() {
    const navigate = useNavigate()

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
    function handleSubmit(e) {
        e.preventDefault()
        if (!errors.email && !errors.password) {
            login(userData)
        } else {
            alert("Datos incorrectos")
        }
    }
    function login(userData) {
        const EMAIL = 'ejemplo@gmail.com';
        const PASSWORD = 'ejemplo1';
        if (userData.password === PASSWORD && userData.email === EMAIL) {
            navigate("/home")
        }
    }
    return (
        <div className={form.backgroundDiv}>
            <form className={form.formContainer} onSubmit={handleSubmit} >
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
            </form>
        </div>
    )
}

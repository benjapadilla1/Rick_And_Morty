import React from 'react'
export default function validation(userData) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let errors = {}
    //EMAIL
    if (!userData.email) {
        errors.email = "El nombre de usuario no puede estar vacío"
    } else if (userData.email.length > 35) {
        errors.userData = "El nombre de usuario no puede tener más de 35 caraceteres"
    } else if (!regexEmail.test(userData.email)) {
        errors.email = "Debe ser un correo electrónico"
    }
    //PASSWORD
    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "La contraseña debe tener entre 6 y 10 caracteres"
    } else if (!userData.password) {
        errors.password = "La contraseña no puede estar vacía";
    } else if (!/\d/.test(userData.password)) {
        errors.password = "La contraseña tiene que contener un número "
    }
    return errors
}

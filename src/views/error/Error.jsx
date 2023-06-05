import React from 'react'
import error from "./Error.module.css"
import { Link } from 'react-router-dom'
export default function Error() {
    return (
        <div className={error.errorContainer}>
            <h1 className={error.text}>
                "¡Oye, Morty! Parece que hemos terminado en la dimensión 404, donde nada tiene sentido."
            </h1>
            <Link to={"/"}>
                <button className={error.button}>¡Portal de escape a la realidad!</button>
            </Link>
        </div>
    )
}

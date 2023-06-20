import React from 'react'
import NavBar from '../NavBar/NavBar'
import styles from "./About.module.css"
export default function About() {
    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <div className={styles.card}>
                    <h2>Benjamin Padilla</h2>
                    <h3>Desarrollador Web Full Stack</h3>
                </div>
            </div>
        </>
    )
}

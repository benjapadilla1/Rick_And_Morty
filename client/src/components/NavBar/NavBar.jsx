import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import styles from "./SearchBar/SearchBar.module.css"
import { NavLink } from "react-router-dom"
export default function NavBar({ onSearch }) {
    return (
        <>
            <h1 className={styles.title} >RICK AND MORTY</h1>
            <SearchBar onSearch={onSearch} />
            <div className={styles.divButtons}>
                <NavLink to={"/about"}>
                    <button className={styles.routerButton}>About</button>
                </NavLink>
                <NavLink to={"/home"}>
                    <button className={styles.routerButton}><i className='fas fa-home' ></i></button>
                </NavLink>
                <NavLink to={"/favorites"}>
                    <button className={styles.routerButton}><i className='fas fa-star'></i></button>
                </NavLink>
            </div>
        </>
    )
}

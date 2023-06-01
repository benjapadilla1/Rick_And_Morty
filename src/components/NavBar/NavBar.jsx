import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import styles from "./SearchBar/SearchBar.module.css"
export default function NavBar({ onSearch }) {
    return (
        <>
            <h1 className={styles.title} >RICK AND MORTY</h1>
            <SearchBar onSearch={onSearch} />
        </>
    )
}

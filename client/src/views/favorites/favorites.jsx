import React, { useEffect, useState } from 'react'
import fav from "./favorites.module.css"
// import { connect } from "react-redux"
import Cards from '../../components/Card/Cards'
import { useDispatch, useSelector } from 'react-redux'
import { filterCards, orderCards, resetFavorites } from '../../redux/Actions'
import { NavLink } from 'react-router-dom'
export default function Favorites() {
    const dispatch = useDispatch()
    const favorites = useSelector((state) => state.myFavorites)
    console.log(favorites)

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
    }
    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }
    const handleReset = () => {
        dispatch(resetFavorites())
    }

    return (
        <div>
            <h1 className={fav.h1}>Favoritos</h1>
            <NavLink to={"/home"} className={fav.divButton} >
                <button className={fav.homeButton} >Volver <i className='fas fa-home'></i> </button>
            </NavLink>
            <div className={fav.selections}>
                <select name="FiltrarOrder" placeholder='Orden' onChange={handleOrder} defaultValue="" className={fav.select}  >
                    <option value="" disabled>Orden</option>
                    <option value="A">Ascendente</option>
                    <option value="B">Descendente</option>
                </select>
                <select name="FiltrarGenero" placeholder='Género' onChange={handleFilter} defaultValue="" className={fav.select}  >
                    <option value="" disabled>Género</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
                <button onClick={handleReset} className={fav.resetButton} >Reset Filters</button>
            </div>
            <Cards characters={favorites} />
        </div>
    )
}

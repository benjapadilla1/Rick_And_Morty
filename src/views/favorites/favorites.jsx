import React, { useState } from 'react'
import fav from "./favorites.module.css"
import { connect } from "react-redux"
import Cards from '../../components/Card/Cards'
import NavBar from '../../components/NavBar/NavBar'
import { useDispatch } from 'react-redux'
import { filterCards, orderCards, resetFavorites } from '../../redux/Actions'
import { NavLink } from 'react-router-dom'
function Favorites({ favorites }) {
    console.log(favorites)
    const [aux, setAux] = useState(false)
    const dispatch = useDispatch()

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
        setAux(true)
    }
    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }
    const handleReset = () => {
        dispatch(resetFavorites())
    }

    return (
        <div>
            {/* <NavBar /> */}
            <NavLink to={"/home"}>
                <button >Volver</button>
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

const mapStateToProps = (state) => {
    return {
        favorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)

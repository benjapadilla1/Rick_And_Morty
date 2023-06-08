import React from 'react'
import { connect } from "react-redux"
import Cards from '../../components/Card/Cards'
import NavBar from '../../components/NavBar/NavBar'
function Favorites({ favorites }) {
    return (
        <div>
            <NavBar />

            <Cards characters={favorites} />
        </div>
    )
}

const mapDispatchToProps = (state) => {
    return {
        favorites: state.myFavorites
    }
}

export default connect(mapDispatchToProps, null)(Favorites)

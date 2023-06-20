import React, { useEffect, useState } from 'react'
import NavBar from "../NavBar/NavBar"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import customDetail from "./Detail.module.css"
export default function Detail() {
    const { id } = useParams()
    const [character, setCharacter] = useState({})
    console.log(character)
    useEffect(() => {
        axios(`http://127.0.0.1:5174/rickandmorty/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data)
            } else {
                window.alert("No hay personajes con este ID")
            }
        })
        return setCharacter({})
    }, [id]);
    return (
        <>
            <NavBar />
            <div className={customDetail.container}>
                <div className={customDetail.card}>
                    <p className={customDetail.name}> {character.name}</p>
                    <p className={customDetail.status}>Estado: {character.status}</p>
                    <p className={customDetail.species}>Especie: {character.species}</p>
                    <p className={customDetail.gender}>Género: {character.gender}</p>
                    <p className={customDetail.origin}>Origen: {character.origin}</p>
                    <div className={customDetail.imgContainer}>
                        <img src={character.image} alt={character.name} className={customDetail.img} />
                    </div>
                </div>
            </div>
        </>
    )
}

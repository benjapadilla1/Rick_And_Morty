import React, { useEffect, useState } from 'react'
import NavBar from "../NavBar/NavBar"
import axios from 'axios'
import { useParams } from 'react-router-dom'
export default function Detail() {
    const { id } = useParams()
    const [character, setCharacter] = useState({})
    console.log(character)
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
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
            <p>{character.name}</p>
            <p>{character.status}</p>
            <p>{character.species}</p>
            <p>{character.gender}</p>
            <p>{character.origin?.name}</p>
            <img src={character.image} alt={character.name} />
        </>
    )
}

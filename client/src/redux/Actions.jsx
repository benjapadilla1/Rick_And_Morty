import axios from "axios"
export const ADD_FAV = "ADD_FAV"
export const REMOVE_FAV = "REMOVE_FAV"
export const ORDER = "ORDER"
export const FILTER = "FILTER"
export const RESET = "RESET"

export const addFavorite = (character) => {
    try {
        return async (dispatch) => {
            const endpoint = "http://127.0.0.1:5174/rickandmorty/fav"
            const { data } = await axios.post(endpoint, character)
            return dispatch({
                type: "ADD_FAV",
                payload: data
            })
        }
    }
    catch (error) {
        console.log("Error ", error)
        throw new Error("Error al agregar el favorito");
    }
}
export const removeFavorite = (id) => {
    try {
        return async (dispatch) => {
            const endpoint = "http://127.0.0.1:5174/rickandmorty/fav" + id
            const { data } = await axios.delete(endpoint)
            return dispatch({
                type: "REMOVE_FAV",
                payload: data
            })
        }
    }
    catch (error) {
        console.log("Error ", error)
        throw new Error("Error al eliminar el favorito");
    }
}

export function filterCards(gender) {
    return {
        type: FILTER,
        payload: gender
    }
}

export function orderCards(order) {
    return {
        type: ORDER,
        payload: order
    }
}

export function resetFavorites() {
    return {
        type: RESET
    }
}
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, RESET } from "./Actions";

const initialState = { myFavorites: [], allCharacters: [], filteredFavorites: [] };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload], //te quedas con todos los personajes con el spread y se añade el nuevo con el payload
                filteredFavorites: [...state.myFavorites, action.payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((character) => character.id !== Number(action.payload))
            }
        case FILTER:
            const filteredChar = state.myFavorites.filter((character) => character.gender === action.payload)
            return {
                ...state,
                filteredFavorites: filteredChar
            }
        case ORDER:
            const orderChars = [...state.filteredFavorites]
            if (action.payload === "A") {
                orderChars.sort((a, b) => a.id - b.id)
            } else if (action.payload === "B") {
                orderChars.sort((a, b) => b.id - a.id)
            }
            return {
                ...state,
                filteredFavorites: orderChars
            }
        case RESET:
            return {
                ...state,
                filteredFavorites: state.myFavorites
            }
        default:
            return {
                ...state,
                myFavorites: state.allCharacters
            }
    }
};

export default rootReducer;

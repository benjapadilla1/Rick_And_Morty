import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, RESET } from "./Actions";

const initialState = { myFavorites: [], allCharacters: [] };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload] //te quedas con todos los personajes con el spread y se añade el nuevo con el payload
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
                myFavorites: filteredChar
            }
        case ORDER:
            const orderChars = [...state.myFavorites]
            if (action.payload === "A") {
                orderChars.sort((a, b) => a.id - b.id)
            } else if (action.payload === "B") {
                orderChars.sort((a, b) => b.id - a.id)
            }
            return {
                ...state,
                myFavorites: orderChars
            }
        case RESET:
            return {
                ...state,
            }
        default:
            return {
                ...state,
                myFavorites: state.allCharacters
            }
    }
};

export default rootReducer;

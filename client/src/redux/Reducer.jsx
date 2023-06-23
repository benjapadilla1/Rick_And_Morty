import { ADD_FAV, FILTER, ORDER, REMOVE_FAV, RESET } from "./Actions";

const initialState = { myFavorites: [], allCharacters: [] };

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: action.payload
            }
        case FILTER:
            const filteredChar = state.allCharacters.filter((character) => character.gender === action.payload)
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
                myFavorites: [...orderChars]
            }
        case RESET:
            return {
                ...state,
                myFavorites: state.allCharacters
            }
        default:
            return {
                ...state,
            }
    }
};

export default rootReducer;

import { ADD_FAV, REMOVE_FAV } from "./Actions";

const initialState = { myFavorites: [] };

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
                myFavorites: state.myFavorites.filter(character => character.id !== Number(action.payload))
            }

        default:
            return {
                ...state
            }
    }
};

export default rootReducer;

import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./types";

const initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload],
                allCharacters: [...state.allCharacters, payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.allCharacters.filter(fav => fav.id !== payload),
                allCharacters: state.allCharacters.filter(fav => fav.id !== payload)
            }
        case FILTER:
            if (payload === 'All') return {
                ...state,
                myFavorites: state.allCharacters
            }
            const allCharactersCopy = [...state.allCharacters];
            const filteredCharacters = allCharactersCopy.filter(character => character.gender === payload);
            return {
                ...state,
                myFavorites: filteredCharacters
            }
        case ORDER:
            let orderedCharacters = []
            if (payload === 'A') {
                orderedCharacters = state.allCharacters.sort((a, b) => a.id - b.id)
            } else {
                orderedCharacters = state.allCharacters.sort((a, b) => b.id - a.id)
            }
            return {
                ...state,
                myFavorites: orderedCharacters
            }
        default:
            return { ...state }
    }
}

export default reducer;
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./types";


export const addFav = (character) => {
    return {
        type: ADD_FAV,
        payload: character
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export const filter = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const order = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}
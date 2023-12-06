// action types
import { ADD_CASH } from "./types"
import { GET_CASH } from "./types"
import { CLEAR_CASH } from "./types"

export const addCashActionCreator = (cash) => ({
    type: ADD_CASH,
    payload: cash
})

export const getCashActrionCreator = (cash) => ({
    type: GET_CASH,
    payload: cash
})
export const clearCashActionCreator = (cash) => ({
    type: CLEAR_CASH,
    payload: cash
})
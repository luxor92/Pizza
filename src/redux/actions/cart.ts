import {ADD_PIZZA, SET_TOTAL_COUNT, SET_TOTAL_PRICE} from "../reducers/cart";

type setTotalPriceACType = {
    type: typeof SET_TOTAL_PRICE,
    payload: number,
}
type setTotalCountACType = {
    type: typeof SET_TOTAL_COUNT,
    payload: number,
}
type addPizzaACType = {
    type: typeof ADD_PIZZA,
    payload: object,
}

export const setTotalPriceAC = (price: number):setTotalPriceACType => ({
    type: SET_TOTAL_PRICE,
    payload: price,
})
export const setTotalCountAC = (count: number):setTotalCountACType => ({
    type: SET_TOTAL_COUNT,
    payload: count,
})
export const addPizzaToCartAC = (obj: object):addPizzaACType => ({
    type: ADD_PIZZA,
    payload: obj,
})
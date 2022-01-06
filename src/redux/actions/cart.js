import {ADD_PIZZA, CLEAR_CART, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_CART_ITEM} from "../reducers/cart";

export const addPizzaToCartAC = (obj) => ({
    type: ADD_PIZZA,
    payload: obj,
})
export const clearCartAC = () => ({
    type: CLEAR_CART,
})
export const removeCartItemAC = (id) => ({
    type: REMOVE_CART_ITEM,
    payload: id
})
export const plusItemAC = (id) => ({
    type: PLUS_CART_ITEM,
    payload: id
})
export const minusItemAC = (id) => ({
    type: MINUS_CART_ITEM,
    payload: id
})
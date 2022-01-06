const SET_PIZZAS = "SET_PIZZAS"
const SET_LOADED = "SET_LOADED"

export const setPizzasAC = (pizzas) => ({
    type: SET_PIZZAS,
    payload: pizzas,
    isLoaded: true
})
export const setLoadingAC = (payload) => ({
    type: SET_LOADED,
    payload,
})
const SET_PIZZAS = "SET_PIZZAS"
const SET_LOADED = "SET_LOADED"

type setPizzaACType = {
    type: typeof SET_PIZZAS,
    payload: Array<object>,
    isLoaded: boolean
}
type setLoadingACType = {
    type: typeof SET_LOADED,
    payload: boolean
}

export const setPizzasAC = (pizzas: Array<object>):setPizzaACType => ({
    type: SET_PIZZAS,
    payload: pizzas,
    isLoaded: true
})
export const setLoadingAC = (payload: boolean):setLoadingACType => ({
    type: SET_LOADED,
    payload,
})
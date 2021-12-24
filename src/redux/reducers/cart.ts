export const SET_TOTAL_PRICE = "SET_TOTAL_PRICE"
export const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
export const ADD_PIZZA = "ADD_PIZZA_TO_CART"

type InitialStateType = {
    totalPizzas: any,
    totalPrice: number,
    totalCount: number
}
const initialState = {
    totalPizzas: {},
    totalPrice: 0,
    totalCount: 0
}

const cartReducer = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        case SET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: action.payload,
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload,
            }
        case ADD_PIZZA: {
            const newTotalPizzas = {
                ...state.totalPizzas,
                [action.payload.id]: !state.totalPizzas[action.payload.id]
                    ? [action.payload]
                    : [...state.totalPizzas[action.payload.id], action.payload]
            }

            const allPizzas = [].concat.apply([], Object.values(newTotalPizzas))
            const totalPrice = allPizzas.reduce((sum: any, obj: any) => obj.price + sum, 0)

            return {
                ...state,
                totalPizzas: newTotalPizzas,
                totalCount: allPizzas.length,
                totalPrice: totalPrice
            }
        }
        default:
            return state
    }
}

export default cartReducer
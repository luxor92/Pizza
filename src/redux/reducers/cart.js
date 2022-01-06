export const SET_TOTAL_PRICE = "SET_TOTAL_PRICE"
export const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
export const ADD_PIZZA = "ADD_PIZZA_TO_CART"
export const CLEAR_CART = "CLEAR_CART"
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM"
export const PLUS_CART_ITEM = "PLUS_CART_ITEM"
export const MINUS_CART_ITEM = "MINUS_CART_ITEM"

/*type InitialStateType = {
    totalPizzas: any,
    totalPrice: number,
    totalCount: number
}*/
const initialState = {
    totalPizzas: {},
    totalPrice: 0,
    totalCount: 0
}

//const getTotalPrice = (array) => array.reduce((sum: any, obj: any) => obj.price + sum, 0)

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
    }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0);
};

const cartReducer = (state = initialState, action) => {
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
            const currentPizzaItems = !state.totalPizzas[action.payload.id]
                ? [action.payload]
                : [...state.totalPizzas[action.payload.id].totalPizzas, action.payload]

            const newTotalPizzas = {
                ...state.totalPizzas,
                [action.payload.id]: {
                    totalPizzas: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            }

            // @ts-ignore
            //const totalCount = Object.keys(newTotalPizzas).reduce((sum, key) => newTotalPizzas[key].pizzaItems.length + sum, 0)
            //const pizzaItems = Object.values(newTotalPizzas).map((obj) => obj.totalPizzas)
            //const allPizzas = [].concat.apply([], pizzaItems)
            //const totalPrice = getTotalPrice(allPizzas)

            const totalCount = getTotalSum(newTotalPizzas, 'totalPizzas.length');
            const totalPrice = getTotalSum(newTotalPizzas, 'totalPrice');

            return {
                ...state,
                totalPizzas: newTotalPizzas,
                totalCount,
                totalPrice
            }
        }
        case CLEAR_CART:
            return {
                ...state,
                totalPizzas: {},
                totalPrice: 0,
                totalCount: 0
            }
        case REMOVE_CART_ITEM:
            const newItems = {
                ...state.totalPizzas
            }
            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalCount = newItems[action.payload].totalPizzas.length
            delete newItems[action.payload]
            return {
                ...state,
                totalPizzas: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        case PLUS_CART_ITEM: {
            const plusPizzaItems = [
                ...state.totalPizzas[action.payload].totalPizzas,
                state.totalPizzas[action.payload].totalPizzas[0]
            ]
            const newItems = {
                ...state.totalPizzas,
                [action.payload]: {
                    totalPizzas: plusPizzaItems,
                    totalPrice: getTotalPrice(plusPizzaItems)
                }
            }
            const totalCount = getTotalSum(newItems, 'totalPizzas.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');
            return {
                ...state,
                totalPizzas: newItems,
                totalPrice,
                totalCount,
            }
        }
        case MINUS_CART_ITEM: {
            const oldItems = state.totalPizzas[action.payload].totalPizzas
            const minusPizzaItems = oldItems.length > 1 ? state.totalPizzas[action.payload].totalPizzas.slice(1) : oldItems
            const newItems = {
                ...state.totalPizzas,
                [action.payload]: {
                    totalPizzas: minusPizzaItems,
                    totalPrice: getTotalPrice(minusPizzaItems)
                }
            }
            const totalCount = getTotalSum(newItems, 'totalPizzas.length');
            const totalPrice = getTotalSum(newItems, 'totalPrice');
            return {
                ...state,
                totalPizzas: newItems,
                totalPrice,
                totalCount,
            }
        }
        default:
            return state
    }
}

export default cartReducer
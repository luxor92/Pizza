type InitialStateType = {
    pizzas: Array<object>,
    isLoaded: boolean
}
const initialState = {
    pizzas: [],
    isLoaded: false
}

const pizzasReducer = (state: InitialStateType = initialState, action: any) => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                pizzas: action.payload,
                isLoaded: true
            }
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            }
        default:
            return state
    }
}

export default pizzasReducer
const initialState = {
    pizzas: [],
    isLoaded: false
}

const pizzasReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                pizzas: action.payload,
            }
        default:
            return state
    }
}

export default pizzasReducer
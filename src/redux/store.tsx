import {combineReducers, createStore} from 'redux'
import filtersReducer from './reducers/filters'
import pizzasReducer from './reducers/pizzas'

let rootReducer = combineReducers({
    pizzasReducer,
    filtersReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// @ts-ignore
let store = createStore(rootReducer, composeEnhancers)

export default store
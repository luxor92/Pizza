import {combineReducers, createStore} from 'redux'
import pizzasReducer from './reducers/pizzas';
import filtersReducer from "./reducers/filters";

let rootReducer = combineReducers({
    pizzasReducer,
    filtersReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export type RootState = ReturnType<typeof rootReducer>

// @ts-ignore
let store = createStore(rootReducer, composeEnhancers)

export default store
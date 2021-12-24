import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import pizzasReducer from './reducers/pizzas';
import filtersReducer from "./reducers/filters";
import thunk from "redux-thunk";
import cartReducer from './reducers/cart';

let rootReducer = combineReducers({
    pizzasReducer,
    filtersReducer,
    cartReducer
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type RootState = ReturnType<typeof rootReducer>

// @ts-ignore
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
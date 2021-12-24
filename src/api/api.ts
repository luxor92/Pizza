import axios from "axios"
import {setPizzasAC} from "../redux/actions/pizzas";

export const getPizzas = (sortBy: any, category: number) => (dispatch: any) => {
    axios.get(`http://localhost:3002/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then((response: any) => {
                dispatch(setPizzasAC(response.data))
            }
        )
}
import React, {useEffect} from 'react';
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Route, Routes} from 'react-router-dom';
import axios from "axios";
import {useDispatch} from 'react-redux';
import setPizzasAC from "./redux/actions/pizzas";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('http://localhost:3002/pizzas')
            .then((response: any) => {
                    dispatch(setPizzasAC(response.data))
                }
            )
        //props.setPizzasAC(response.data.pizzas))
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"cart"} element={<Cart/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App

/*const mapState = (state: any) => {
    return {
        pizzas: state.pizzasReducer.pizzas,
        filters: state.filtersReducer
    }
}
const mapDispatch = {
    setPizzasAC
}

export default connect(mapState, mapDispatch)(App);*/

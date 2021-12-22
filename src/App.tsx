import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Route, Routes} from 'react-router-dom';
import axios from "axios";
import { connect } from 'react-redux';
import setPizzasAC from "./redux/actions/pizzas";

function App(props: any) {
    useEffect(() => {
    axios.get('http://localhost:3000/db.json')
            .then((response:any) => props.setPizzasAC(response.data.pizzas))
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path={"/"} element={<Home items={props.pizzas}/>}/>
                    <Route path={"cart"} element={<Cart/>}/>
                </Routes>
            </div>
        </div>
    );
}

const mapState = (state: any) => {
    return {
        pizzas: state.pizzasReducer.pizzas,
        filters: state.filtersReducer
    }
}
const mapDispatch = {
    setPizzasAC
}

export default connect(mapState, mapDispatch)(App);

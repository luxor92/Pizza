import React from "react";
import {Link} from "react-router-dom";
import pizzalogo from "../assets/img/pizza-logo.svg";
import Button from "./Button";

function Header() {
    return (
        <div className="header">

            <div className="container">
                <Link to={"/"}>
                    <div className="header__logo">
                        <img width="38" src={pizzalogo} alt="Pizza logo"/>
                        <div>
                            <h1>React Pizza</h1>
                            <p>the tastiest pizza in the universe</p>
                        </div>
                    </div>
                </Link>

                <div className="header__cart">
                    <Link to={"/cart"}>
                        <Button name={"Корзина"} className={"button--cart"}/>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Header
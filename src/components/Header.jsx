import React from "react";
import {Link} from "react-router-dom";
import pizzalogo from "../assets/img/pizza-logo.svg";
import Button from "./Button";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";

function Header() {
    // Во избежание лишнего перерендера нужно указать за какими параметрами следить в селекторе
    const { totalPrice, totalCount} = useSelector((state) => ({
        totalPrice: state.cartReducer.totalPrice,
        totalCount: state.cartReducer.totalCount,
    }))

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
                        <Button name={"Корзина"} className={"button--cart"} totalPrice={totalPrice} totalCount={totalCount}/>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Header
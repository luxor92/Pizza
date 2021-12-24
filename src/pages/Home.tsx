import React, {useCallback, useEffect} from 'react';
import Categories from "../components/Categories";
import Sorter from "../components/Sorter";
import PizzaBlock, {PizzaType} from "../components/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {setCategoryAC, setSortByAC} from "../redux/actions/filters";
import {getPizzas} from "../api/api";
import Preloader from "../components/Preloader";
import index from "classnames";
import {setLoadingAC} from "../redux/actions/pizzas";
import {addPizzaToCartAC} from "../redux/actions/cart";

// Вынесли отдельно, чтобы не было лишнего перерендера (+memo, +useCallback)
const categoryNames = ['Грибная', 'Веганская', 'Итальянская', 'Мексиканская', 'Острая']
const sortItems = [
    {name: 'популярности', type: 'popular', order: 'desc'},
    {name: 'цене', type: 'price', order: 'asc'},
    {name: 'алфавиту', type: 'name', order: 'asc'}
]

function Home() {
    const items = useSelector((state: RootState) => state.pizzasReducer.pizzas)
    const isLoaded = useSelector((state: RootState) => state.pizzasReducer.isLoaded)
    const {category, sortBy} = useSelector((state: RootState) => state.filtersReducer)
    const cartItems = useSelector((state: RootState) => state.cartReducer.totalPizzas)

    console.log(cartItems)

    const dispatch = useDispatch()

    const onSelectedCategory = useCallback((index: number) => {
        dispatch(setCategoryAC(index))
    }, [])
    const onClickSortingPopup = useCallback((type: string) => {
        dispatch(setSortByAC(type))
    }, [])
    const addPizzaToCart = (obj: any) => {
        dispatch(addPizzaToCartAC(obj))
    }

    // Получение пицц при первом рендере
    useEffect(() => {
        dispatch(setLoadingAC(false))
        dispatch(getPizzas(sortBy, category))
        //if (!items.length) {
    }, [category, sortBy])

    return (
        <div className="container">

            <div className="content__top">
                <Categories pizzas={categoryNames}
                            onClickItem={onSelectedCategory}
                            activeCategory={category}/>
                <Sorter filters={sortItems}
                        activeSorting={sortBy.type}
                        onClickSortingPopup={onClickSortingPopup}
                        />
            </div>

            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded ? (items.map((item: PizzaType, index: any) =>
                        <PizzaBlock
                            {...item}
                            key={item.id}
                            isLoading={true}
                            onAddPizza={addPizzaToCart}
                            addedCount={cartItems[item.id] && cartItems[item.id].length}
                        />))
                    : Array(12).fill(0).map((_, index) => <Preloader key={index}/>)
                }
            </div>
        </div>);
}

export default Home;
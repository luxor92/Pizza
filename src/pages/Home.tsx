import React, {useCallback} from 'react';
import Categories from "../components/Categories";
import Sorter from "../components/Sorter";
import PizzaBlock from "../components/PizzaBlock";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {setCategoryAC} from "../redux/actions/filters";

// Вынесли отдельно, чтобы не было лишнего перерендера (+memo, +useCallback)
const categoryNames = ['Грибная', 'Веганская', 'Итальянская', 'Мексиканская', 'Острая']
const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' }
]

function Home (props: any)  {
    const items = useSelector((state: RootState) => state.pizzasReducer.pizzas)
    const dispatch = useDispatch()

    const onSelectedCategory = useCallback((index:any) => {
        dispatch(setCategoryAC(index))
    }, [])

    return (
        <div className="container">

            <div className="content__top">
                <Categories pizzas={categoryNames}
                            onClickItem={onSelectedCategory}/>
                <Sorter filters={sortItems}/>
            </div>

            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map((item: any, index:number) =>
                        <PizzaBlock
                            {...item}
                            key={item.id}
                            />)
                }
            </div>
        </div>    );
}

export default Home;
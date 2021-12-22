import React from 'react';
import Categories from "../components/Categories";
import Sorter from "../components/Sorter";
import PizzaBlock from "../components/PizzaBlock";

function Home (props: any)  {
    return (
        <div className="container">

            <div className="content__top">
                <Categories pizzas={[
                    'Vegan',
                    'Cheese',
                    'Spicy',
                    'Vegetarian',
                    'Mushroom'
                ]}/>
                <Sorter filters={[
                    { name: 'популярности', type: 'popular' },
                    { name: 'цене', type: 'price' },
                    { name: 'алфавиту', type: 'alphabet' }
                ]}/>
            </div>

            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    props.items.map((item: any, index:number) =>
                        <PizzaBlock
                            {...item}
                            key={item.id}
                            />)
                }
            </div>
        </div>    );
}

export default Home;
import React from 'react';

type CategoryType = {
    pizzas: Array<string>
    onClickItem?: any
    activeCategory: number | null
}

const Categories = React.memo(function Categories(props: CategoryType) {

    return (
        <div className="categories">
            <ul>
                <li
                    className={props.activeCategory === null ? 'active' : ''}
                    onClick={() => {props.onClickItem(null)}}>Все</li>

                {props.pizzas.map((pizzaName: string, index: number) =>
                    <li className={props.activeCategory === index ? 'active' : ''}
                        key={index}
                        onClick={() => {
                            props.onClickItem(index)
                        }}>
                        {pizzaName}
                    </li>)}
            </ul>
        </div>
    );
})

export default Categories;
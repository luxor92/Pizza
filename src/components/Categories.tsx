import React, { useState} from 'react';

type PropsType = {
    pizzas: Array<string>
    onClickItem?: any
}

const Categories = React.memo(function Categories(props: PropsType) {
    const [activeButton, setActiveButton] = useState<number | null>(null)

    const onSelectedItem = (index: any) => {
        setActiveButton(index)
        props.onClickItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeButton === null ? 'active' : ''}
                    onClick={() => {onSelectedItem(null)}}>Все</li>

                {props.pizzas.map((pizzaName: string, index) =>
                    <li className={activeButton === index ? 'active' : ''}
                        key={index}
                        onClick={() => {
                            onSelectedItem(index)
                        }}>
                        {pizzaName}
                    </li>)}
            </ul>
        </div>
    );
})

export default Categories;
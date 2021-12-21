import React, {useState} from 'react';

type PropsType = {
    pizzas: Array<string>
}

function Categories(props: PropsType) {
    const [activeButton, setActiveButton] = useState<number | null>(null)

    return (
        <div className="categories">
            <ul>
                <li
                    className={activeButton === null ? 'active' : ''}
                    onClick={() => {setActiveButton(null)}}>All</li>

                {props.pizzas.map((pizzaName: string, index) =>
                    <li className={activeButton === index ? 'active' : ''}
                        key={index}
                        onClick={() => {
                            setActiveButton(index)
                        }}>
                        {pizzaName}
                    </li>)}
            </ul>
        </div>
    );
}

export default Categories;
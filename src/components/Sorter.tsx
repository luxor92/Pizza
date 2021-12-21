import React, {MouseEventHandler, useEffect, useRef, useState} from "react";

type PropsType = {
    filters: Array<string>
}

const Sorter: React.FC<PropsType> = (props) => {
    // Создание локального состояния попапа для вкл./выкл.
    const [sortingPopup, showSortingPopup] = useState<boolean | null>(false)
    // Состояние выбранного (активного) фильтра
    const [activeFilter, setActiveFilter] = useState<number>(0)
    // Ссылка на div-элемент попапа сортировки
    const sortRef = useRef()
    // Ссылка на выбранный фильтр
    const activeLabel = props.filters[activeFilter]
    // Подписка на все события кликов
    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [])

    // Скрытие попапа сортировки
    const handleOutsideClick = (e: any) => {
        if (!e.path.includes(sortRef.current)) {
            showSortingPopup(false)
        }
    }
    // Вкл./выкл. попапа сортировки при нажатии на него
    const toggleSortingPopup = () => {
        showSortingPopup(!sortingPopup)
    }
    // Смена состояния выбранного фильтра (для онклика)
    const onSelectedFilter = (index: any) => {
        setActiveFilter(index)
    }

    return (
        //@ts-ignore
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <svg
                    className={sortingPopup ? 'rotated' : ''}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Sorting by:</b>
                <span onClick={toggleSortingPopup}> {activeLabel} </span>
            </div>

            { sortingPopup &&
            <div className="sort__popup">
                <ul>
                    { props.filters.map((filter:string, index:number) =>
                    <li className={activeFilter === index ? 'active' : ''}
                        key={index}
                        onClick={() => onSelectedFilter(index)}>
                        {filter}
                    </li>
                    )}
                </ul>
            </div>
            }

        </div>
)}

export default Sorter
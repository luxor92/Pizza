import React, { useEffect, useRef, useState} from "react";

type SortingType = {
    filters: any,
    activeSorting: string,
    onClickSortingPopup?: any
}

const Sorter = React.memo (function Sorter (props:SortingType) {
    // Создание локального состояния попапа для вкл./выкл.
    const [sortingPopup, showSortingPopup] = useState<boolean | null>(false)
    // Ссылка на div-элемент попапа сортировки
    const sortRef = useRef()
    // Ссылка на выбранный фильтр
    const activeLabel = props.filters.find((filter: any) => filter.type === props.activeSorting).name
    // Подписка на все события кликов
    useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
    }, [])

    // Скрытие попапа сортировки
    const handleOutsideClick = (event: any) => {
        const path = event.path || (event.composedPath && event.composedPath())
        if (!path.includes(sortRef.current)) {
            showSortingPopup(false)
        }
    }
    // Вкл./выкл. попапа сортировки при нажатии на него
    const toggleSortingPopup = () => {
        showSortingPopup(!sortingPopup)
    }
    // Смена состояния выбранного фильтра (для онклика)
    const onSelectedFilter = (index: number) => {
        props.onClickSortingPopup(index)
        showSortingPopup(false)
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
                <b>Сортировка по:</b>
                <span onClick={toggleSortingPopup}> {activeLabel} </span>
            </div>

            { sortingPopup &&
            <div className="sort__popup">
                <ul>
                    { props.filters.map((filter: any, index:string) =>
                    <li className={props.activeSorting === index ? 'active' : ''}
                        key={index}
                        onClick={() => onSelectedFilter(filter)}>
                        {filter.name}
                    </li>
                    )}
                </ul>
            </div>
            }

        </div>
)})

export default Sorter
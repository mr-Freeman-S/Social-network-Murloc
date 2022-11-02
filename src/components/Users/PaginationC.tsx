import React, {useState} from 'react';
import style from './PaginationC.module.css'

type paginationPropsType = {
    totalItemsCount: number,
    pageSize: number,
    currentItem: number,
    portionSize?: number,
    onChangeCurrentItem: (page: number) => void
}

export const PaginationC: React.FC<paginationPropsType> = ({
                                                               totalItemsCount,
                                                               pageSize,
                                                               currentItem,
                                                               onChangeCurrentItem,
                                                               portionSize = 5
                                                           }) => {

    const [currentPortion, setCurrentPortion] = useState<number>(1)

    const pageCount = Math.ceil(totalItemsCount / pageSize)
    const pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    const totalPortionCount = Math.ceil(pageCount / portionSize)
    const leftBorderPortion = (currentPortion - 1) * portionSize + 1
    const rightBorderPortion = currentPortion * portionSize

    const onClickChangePrevPortion = () => {
        setCurrentPortion(prevState => prevState - 1)
        onChangeCurrentItem(leftBorderPortion)
    }
    const onClickChangeNextPortion = () => {
        setCurrentPortion(prevState => prevState + 1)
        onChangeCurrentItem(rightBorderPortion)
    }
    return (
        <div>
            {currentPortion > 1 &&
                <button onClick={onClickChangePrevPortion}>prev</button>}
            {pages
                .filter(page => leftBorderPortion <= page && rightBorderPortion >= page)
                .map(page => (<span className={(page === currentItem) ? style.currentPage : style.otherPage}
                                    onClick={() => onChangeCurrentItem(page)}> {page} </span>))}
            {}
            {currentPortion < totalPortionCount &&
                <button onClick={onClickChangeNextPortion}>next</button>}
        </div>
    );
};


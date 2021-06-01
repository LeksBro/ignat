import React, {MouseEventHandler} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
type AffairsPropsType = { // need to fix any
    data:  Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setClass = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }

    return (
        <div className={s.block}>

            {mappedAffairs}

            <button onClick={setClass} value={'all'}>All</button>
            <button onClick={setClass} value={'high'}>High</button>
            <button onClick={setClass} value={'middle'}>Middle</button>
            <button onClick={setClass} value={'low'}>Low</button>
        </div>
    )
}

export default Affairs

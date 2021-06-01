import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
export type ActionType = {
    type: 'sort' | 'sortAge'
    payload: 'up' | 'down' | number
}
export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople:Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p) => (
        <div key={p._id}>
            <ul>
                <li>{p.name}<span>{`-Возраст ${p.age}`}</span></li>
            </ul>

        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
    const sortAge = () => setPeople(homeWorkReducer(initialPeople, {type: 'sortAge', payload: 18}))
    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}
            <div>
                <span><SuperButton onClick={sortUp}>sort up</SuperButton></span>
                <span><SuperButton onClick={sortDown}>sort down</SuperButton></span>
                <span><SuperButton onClick={sortAge}>sortAge</SuperButton></span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8

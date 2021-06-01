import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'
type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback:(_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    const priorityClass = s[props.affair.priority]
    return (
        <div>
            <div>
                <img className={s.image} src="https://sun1-87.userapi.com/s/v1/ig2/QNiBvW54IGRZ_9HyQaZfmTtlK5m2SIWRoKRanfmQdrYT3IsXGPzWNFbKRkucyL5yGE_aOrDcJDA0X7MZbIikE_On.jpg?size=200x0&quality=96&crop=23,23,640,640&ava=1" alt="img"/>
                {props.affair.name}
                <span className={priorityClass}>{`-${props.affair.priority}`}</span>
                <button onClick={deleteCallback}>X</button>
            </div>


        </div>
    )
}

export default Affair

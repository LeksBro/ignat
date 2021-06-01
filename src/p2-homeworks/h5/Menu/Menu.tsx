import s from "./Menu.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
type MenuPropsType = {
    header: string,
    items: Array<any>
    menu: boolean
    setActive: (value: boolean) => void
}
const Menu:React.FC<MenuPropsType> = ({header, items,...props}) => {
    return (
        <div className={props.menu? s.menuActive:s.menu} onClick={() => props.setActive(false)}>
            <div className={s.menuContent}>
                <div className={s.menuHeader} onClick={e => e.stopPropagation()}>{header}</div>
                {<ul>
                    {items.map(item => {
                        return <li key={item.id} onClick={e => e.stopPropagation()}>
                            <NavLink to={item.href}>{item.value}</NavLink>
                        </li>
                    })}
                </ul>}
            </div>
        </div>
    )
}

export default Menu

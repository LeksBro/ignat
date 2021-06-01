import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'
function Header() {
    return (
        <div className={s.menu}>
            <button></button>
            <NavLink to={'/'}>pre-junior</NavLink>
            <NavLink to={'/junior'}>junior</NavLink>
            <NavLink to={'/junior+'}>junior+</NavLink>

        </div>
    )
}

export default Header

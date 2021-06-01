import React from 'react'
import {HashRouter} from "react-router-dom";
import s from './HW5.module.css'
import AppMenu from "./AppMenu";



function HW5() {


    return (
        <div className={s.app}>
            {/*в gh-pages лучше работает HashRouter*/}
            <HashRouter>
           {/* <Header/>*/}
           <AppMenu />

            </HashRouter>
        </div>
    )
}

export default HW5

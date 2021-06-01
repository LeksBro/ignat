import React, {useState} from "react";
import s from './AppMenu.module.css'
import Menu from "./Menu/Menu";
import Routes from "./Routes";

const AppMenu = () => {
    const [menuActive, setMenuActive] = useState<boolean>(false)
    const items = [
        {id: 1,value: 'PreJunior', href: '/'},
        {id: 2,value: 'Junior', href: '/junior'},
        {id: 3,value: 'Junior+', href: '/junior+'},]

    return <div className={s.app}>
        <nav>
            <div className={s.burgerBtn} onClick={() => setMenuActive(!menuActive)}>
                <span></span>
            </div>
        </nav>
        <main className={menuActive?s.mainMargin: ''}>
            <Routes/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci dignissimos dolore exercitationem libero molestiae sunt ullam ut? Assumenda, beatae, commodi corporis dolorum est fuga iste iusto quia quod sunt totam.</p>
        </main>
        <div>
            <Menu menu={menuActive} setActive={setMenuActive}  header={'Menu'} items={items} />
        </div>

    </div>
}
export default AppMenu
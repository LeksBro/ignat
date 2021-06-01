import React, {ChangeEvent,KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (value:ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    addUserOnKeyPress: (valeu: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers,addUserOnKeyPress} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)
    const divClass =error ? s.errorText : ''
    return (
        <div>
            <input value={name} onChange={setNameCallback}
                   className={inputClass} onKeyPress={addUserOnKeyPress} onBlur={setNameCallback}/>
            <button onClick={addUser} >add</button>
            <span>{totalUsers}</span>
            <div className={divClass}>{error}</div>
        </div>
    )
}

export default Greeting

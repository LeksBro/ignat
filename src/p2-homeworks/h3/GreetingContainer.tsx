import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users:UserType[] // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value.trim()) // need to fix
       error && setError('')
        if (e.currentTarget.value.trim() === ''){
            setError('Поле ввода не должно быть пустым')
        }
    }
    const addUser = () => {
        if (name.trim() !== '') {
            addUserCallback(name)
            alert(`Hello  !`) // need to fix
            error && setError('')
        }else { setError('Поле ввода не должно быть пустым')}

    }
    const addUserOnKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (name.trim() === '') {
            setError('Поле ввода не должно быть пустым')
            return
        }
        if (e.charCode ===13){
            addUserCallback(name)
            alert(`Hello  !`) // need to fix
            setError('')
        }

    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            addUserOnKeyPress={addUserOnKeyPress}
        />
    )
}

export default GreetingContainer

import React from 'react'
import Message from './Fessage'

const messageData: messageDataType = {
    avatar: 'https://pw.artfile.me/wallpaper/06-05-2007/307x230/tenjou-tengett-12-jpg-anime-tenge-188305.jpg',
    name: 'Alexandr',
    message: 'Lorem ipsum dolor',
    time: '22:00',
}
export type messageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}
function HW1() {
    return (

        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
               data = {messageData}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1

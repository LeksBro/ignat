import React from 'react'
import s from './Fessage.module.css'
import {messageDataType} from "./HW1";
type MessagePropsTYpe = {
  data:  messageDataType
}


function Message(props: MessagePropsTYpe) {
return<div>

    <div className={s.messages}>

      <div className={s.container}>
        <div className={s.image}>
          <img className={s.lockimage} src="https://pw.artfile.me/wallpaper/06-05-2007/307x230/tenjou-tengett-12-jpg-anime-tenge-188305.jpg" alt="img"/>
        </div>
        <div className={s.message}>
          <span className={s.item1}>{props.data.name}</span>
          <span className={s.item2}>{props.data.message}</span>
          <span className={s.item3}>{props.data.time}</span>

        </div>

      </div>

    </div>


  </div>


}
export default Message
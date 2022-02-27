import React, {ChangeEvent, EventHandler, useRef, useState} from 'react';
import s from "../Dialogs.module.css";
import {addNewMessage, messageType} from "../../../redux/state";
import {v1} from "uuid";

type MessagePropsType = {
    data:  Array<messageType>
    addNewMessage: (text:string)=> void
}

const Messages = (props: MessagePropsType) => {
    console.log('props: ', props)
    let userMessages = props.data.map(m => <div className={s.messages}>{m.message}</div>)

    let [value,setValue]= useState('')

    const onChangeHandler = (event:ChangeEvent<HTMLTextAreaElement>) => {
      setValue(event.currentTarget.value)
    }
    const onClickButtonHandler = () => {
        props.addNewMessage(value)
        setValue('')
    }


    return (
        <div className={s.messages}>
            {userMessages}
            <div><textarea placeholder='Enter message' onChange={onChangeHandler} value={value} cols={50} rows={3}/>
            <button onClick={onClickButtonHandler} >add post</button></div>
        </div>
    );
};

export default Messages;
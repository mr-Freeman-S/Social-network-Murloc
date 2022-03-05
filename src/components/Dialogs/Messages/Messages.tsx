import React, {ChangeEvent, EventHandler, useRef, useState} from 'react';
import s from "../Dialogs.module.css";
import {addNewMessage, messageType} from "../../../redux/state";
import {v1} from "uuid";

type MessagePropsType = {
    data:  Array<messageType>
    newMessageText:string
    addNewMessage: ()=> void
    changeNewMessage: (e:ChangeEvent<HTMLTextAreaElement>)=> void
}

const Messages = (props: MessagePropsType) => {
    let userMessages = props.data.map(m => <div className={s.messages}>{m.message}</div>)

    return (
        <div className={s.messages}>
            {userMessages}
            <div><textarea placeholder='Enter message' onChange={(e)=> props.changeNewMessage(e)} value={props.newMessageText} cols={50} rows={3}/>
            <button onClick={()=> props.addNewMessage()} >add post</button></div>
        </div>
    );
};

export default Messages;
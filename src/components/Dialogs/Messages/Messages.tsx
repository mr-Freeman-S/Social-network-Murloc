import React from 'react';
import style from "../Dialogs.module.css";
import {MessagesPropsType} from "./MessagesContainer";
import AddMessageFormRedux from "./AddMessageForm";


const Messages = (props: MessagesPropsType) => {
    let userMessages = props.data.map(m => <div className={style.messages}>{m.message}</div>)

    const submit = (value: any) => {
        props.addNewMessage(value.newMessageBody)
    }
    return (
        <div className={style.messages}>
            {userMessages}
            <AddMessageFormRedux onSubmit={submit}/>
        </div>
    );
};

export default Messages;
import React from 'react';
import s from "../Dialogs.module.css";
import {messageType} from "../../../redux/state";

type MessagePropsType = {
    data:  Array<messageType>
}

const Messages = (props: MessagePropsType) => {
    console.log('props: ', props)
    let userMessages = props.data.map(m => <div className={s.messages}>{m.message}</div>)
    return (
        <div className={s.messages}>
            {userMessages}
        </div>
    );
};

export default Messages;
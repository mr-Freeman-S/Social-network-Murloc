import React from 'react';
import s from "../Dialogs.module.css";
import {messageType} from "../../../redux/state";

const Messages = (props: Array<messageType>) => {
    let userMessages = props.map(m => <div className={s.messages}>{m.message}</div>)
    return (
        <div className={s.messages}>
            {userMessages}
        </div>
    );
};

export default Messages;
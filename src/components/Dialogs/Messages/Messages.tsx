import React from 'react';
import s from "../Dialogs.module.css";

type MessagesPropsType = {
    dataMessages: Array<{id:number, message: string}>
}

const Messages = (props:MessagesPropsType) => {
    let userMessages = props.dataMessages.map(m => <div className={s.messages}>{m.message}</div>)

    return (

            <div className={s.messages}>
                {userMessages}
            </div>

    );
};

export default Messages;
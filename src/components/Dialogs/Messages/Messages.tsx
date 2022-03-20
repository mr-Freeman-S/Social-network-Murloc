import React, {ChangeEvent} from 'react';
import s from "../Dialogs.module.css";
import {messageType} from "../../../redux/store";
import {addNewMessageActionCreator, changeNewMessageActionCreator} from "../../../redux/dialogs-reducer";


type MessagePropsType = {
    data: Array<messageType>
    newMessageText: string
    onChangeCallback: (e: ChangeEvent<HTMLTextAreaElement>) => void
    onClickCallback: () => void
}

const Messages = (props: MessagePropsType) => {
    let userMessages = props.data.map(m => <div className={s.messages}>{m.message}</div>)
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeCallback(e)
    }
    const onClickHandler = () => {
        props.onClickCallback()
    }
    return (
        <div className={s.messages}>
            {userMessages}
            <div><textarea placeholder='Enter message' onChange={onChangeHandler} value={props.newMessageText} cols={50}
                           rows={3}/>
                <button onClick={onClickHandler}>add post</button>
            </div>
        </div>
    );
};

export default Messages;
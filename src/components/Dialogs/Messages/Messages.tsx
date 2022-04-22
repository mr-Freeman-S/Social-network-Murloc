import React, {ChangeEvent} from 'react';
import style from "../Dialogs.module.css";
import {MessagesPropsType} from "./MessagesContainer";


const Messages = (props: MessagesPropsType) => {
    let userMessages = props.data.map(m => <div className={style.messages}>{m.message}</div>)
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeCallback(e)
    }
    const onClickHandler = () => {
        props.onClickCallback()
    }
    return (
        <div className={style.messages}>
            {userMessages}
            <div><textarea placeholder='Enter message' onChange={onChangeHandler} value={props.newMessageText} cols={50}
                           rows={3}/>
                <button onClick={onClickHandler}>add post</button>
            </div>
        </div>
    );
};

export default Messages;
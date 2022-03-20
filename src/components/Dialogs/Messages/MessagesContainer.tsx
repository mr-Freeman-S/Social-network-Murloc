import React, {ChangeEvent} from 'react';
import s from "../Dialogs.module.css";
import {messageType, StoreType} from "../../../redux/store";
import {addNewMessageActionCreator, changeNewMessageActionCreator} from "../../../redux/dialogs-reducer";
import Messages from "./Messages";


type MessagePropsType = {
    /*data: Array<messageType>
    newMessageText: string
    dispatch: (action: any) => void*/
    store:StoreType

}

const MessagesContainer = (props: MessagePropsType) => {
    let state = props.store.getState()
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch(changeNewMessageActionCreator(e))
    }
    const onClickHandler = () => {
        props.store.dispatch(addNewMessageActionCreator())
    }
    return <Messages onClickCallback={onClickHandler} newMessageText={state.dialogPage.newMessageText} onChangeCallback={onChangeHandler} data={state.dialogPage.messagesData}/>;
};

export default MessagesContainer;
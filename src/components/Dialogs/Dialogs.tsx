import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItems/DialogItem";
import Messages from "./Messages/Messages";
import {dialogsType, messageType, StoreType} from "../../redux/store";
import MessagesContainer from "./Messages/MessagesContainer";

type DialogsPropsType = {
    /*dialogsData: Array<dialogsType>
    messagesData: Array<messageType>
    newMessageText:string
    dispatch:(action:any)=> void*/
    store:StoreType
}

function Dialogs(props: DialogsPropsType) {

    return (
        <div className={s.dialogs}>
            <DialogItem dataUsers={props.store.getState().dialogPage.dialogsData}/>
            <MessagesContainer />
        </div>
    );
}

export default Dialogs;
import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItems/DialogItem";
import Messages from "./Messages/Messages";
import {dialogsType, messageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsData: Array<dialogsType>
    messagesData: Array<messageType>
    addNewMessage: (text:string)=> void
}

function Dialogs(props: DialogsPropsType) {

    return (
        <div className={s.dialogs}>
            <DialogItem dataUsers={props.dialogsData}/>
            <Messages addNewMessage={props.addNewMessage} data={props.messagesData}/>
        </div>
    );
}

export default Dialogs;
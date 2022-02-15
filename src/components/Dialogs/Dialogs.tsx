import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItems/DialogItem";
import Messages from "./Messages/Messages";
import {DialogPageType, dialogsType} from "../../redux/state";



function Dialogs(props: DialogPageType) {
    return (
        <div className={s.dialogs}>
            <DialogItem {...props.dialogsData}/>
            <Messages {...props.messagesData}/>
        </div>
    );
}

export default Dialogs;
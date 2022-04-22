import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItems/DialogItem";
import MessagesContainer from "./Messages/MessagesContainer";

type DialogsPropsType = {
    /*dialogsData: Array<dialogsType>
    messagesData: Array<messageType>
    newMessageText:string
    dispatch:(action:any)=> void*/
}

function Dialogs(props: DialogsPropsType) {

    return (
        <div className={style.dialogs}>
            <DialogItem />
            <MessagesContainer />
        </div>
    );
}

export default Dialogs;
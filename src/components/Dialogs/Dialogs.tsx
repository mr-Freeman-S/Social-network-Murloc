import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItems/DialogItem";
import Messages from "./Messages/Messages";

type DialogsPropsType = {

}

function Dialogs(props: any) {
    const dialogsData = [
        {id: 1, name: 'Kate'},
        {id: 2, name: 'Maks'},
        {id: 3, name: 'Artem'},
        {id: 4, name: 'Kostya'},
        {id: 5, name: 'Sveta'}]

    const messageData = [
        {id: 1, message: 'How are you?'},
        {id: 2, message: 'What are you doing now?'},
        {id: 3, message: 'how are you?'},
        {id: 4, message: 'Do you want to go to the cinema'}]

    return (
        <div className={s.dialogs}>
            <DialogItem items={dialogsData}/>
            <Messages dataMessages={messageData}/>
        </div>
    );
}

export default Dialogs;
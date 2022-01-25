import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type MessageType = {
    message: string
}

function Message(props: MessageType) {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

type DialogType = {
    name: string,
    id: number
}

function Dialog(props: DialogType) {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialog/" + props.id}>{props.name}</NavLink>
        </div>

    )
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

    let userDialogs = dialogsData.map(user => <Dialog name={user.name} id={user.id}/>)
    let userMessages = messageData.map(message => <Message message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {userDialogs}

            </div>
            <div className={s.messages}>
                {userMessages}
            </div>
        </div>
    );
}

export default Dialogs;
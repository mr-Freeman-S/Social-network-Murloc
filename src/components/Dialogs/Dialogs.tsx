import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type MessageType = {
    message:string
}
function Message(props:MessageType) {
    return(
        <div className={s.message}>{props.message}</div>
    );
}

type DialogType = {
    name:string,
    id:number
}
function Dialog(props:DialogType) {
    return(
        <div className={s.dialog}>
            <NavLink to={"/dialog/" + props.id}>{props.name}</NavLink>
        </div>

    )
}

function Dialogs(props: any) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name={'Kate'} id={1}/>
                <Dialog name={'Maks'} id={2}/>
                <Dialog name={'Artem'} id={3}/>
                <Dialog name={'Kostya'} id={4}/>
                <Dialog name={'Sveta'} id={5}/>

            </div>
            <div className={s.messages}>
                <Message message={'How are you?'}/>
                <Message message={'What are you doing now?'}/>
                <Message message={'how are you?'}/>
                <Message message={'how are you?'}/>
            </div>
        </div>
    );
}

export default Dialogs;
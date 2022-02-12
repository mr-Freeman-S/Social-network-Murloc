import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    items: Array<{id:number, name:string}>
}

const DialogItem = (props:DialogItemPropsType) => {
    let userDialogs = props.items.map(user => <Dialog name={user.name} id={user.id}/>)
    return (

            <div className={s.dialogsItems}>
                {userDialogs}

            </div>

    );
};

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

export default DialogItem;
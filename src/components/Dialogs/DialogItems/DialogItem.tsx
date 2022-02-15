import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {dialogsType} from "../../../redux/state";


const DialogItem = (props:Array<dialogsType>) => {
    let userDialogs = props.map(user => <Dialog {...user}/>)
    return (

            <div className={s.dialogsItems}>
                {userDialogs}

            </div>

    );
};


function Dialog(props: dialogsType) {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialog/" + props.id}>{props.name}</NavLink>
        </div>

    )
}

export default DialogItem;
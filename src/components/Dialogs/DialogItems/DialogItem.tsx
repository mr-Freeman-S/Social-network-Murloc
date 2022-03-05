import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {dialogsType} from "../../../redux/state";


type DialogsPropsType = {dataUsers:Array<dialogsType>}

const DialogItem = (props:DialogsPropsType) => {
    let userDialogs = props.dataUsers.map(user => <Dialog id={user.id} name={user.name} img={user.img}/>)
    return (
            <div className={s.dialogsItems}>
                {userDialogs}
            </div>
    );
};

function Dialog(props: dialogsType) {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialog/" + props.id}>
                {props.name}
            </NavLink>
        </div>

    )
}

export default DialogItem;
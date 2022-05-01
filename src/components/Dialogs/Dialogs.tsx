import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItems/DialogItem";
import MessagesContainer from "./Messages/MessagesContainer";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";

type DialogsPropsType = {
    /*dialogsData: Array<dialogsType>
    messagesData: Array<messageType>
    newMessageText:string
    dispatch:(action:any)=> void*/
}

function Dialogs(props: DialogsPropsType) {
    const isAuthorized = useSelector<AppStateType>(state => state.auth.isAuthorized)
    if(!isAuthorized) return <Navigate replace to="/login"/>
    return (
        <div className={style.dialogs}>
            <DialogItem />
            <MessagesContainer />
        </div>
    );
}

export default Dialogs;
import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItems/DialogItem";
import MessagesContainer from "./Messages/MessagesContainer";
import {withAuthRedirect} from "../../hoc/wuthAuthRedirect";


function Dialogs() {
    return (
        <div className={style.dialogs}>
            <DialogItem />
            <MessagesContainer />
        </div>
    );
}

export default withAuthRedirect(Dialogs)
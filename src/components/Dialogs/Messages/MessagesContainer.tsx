import React, {ChangeEvent} from 'react';
import s from "../Dialogs.module.css";
import {messageType, StoreType} from "../../../redux/store";
import {
    addNewMessageAC,

    changeNewMessageAC,

} from "../../../redux/dialogs-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    data:Array<messageType>
    newMessageText:string
}
type mapDispatchToPropsType = {
    onClickCallback: () => void
    onChangeCallback:( e: ChangeEvent<HTMLTextAreaElement>) => void
}

export type MessagesPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        data: state.dialogPage.messagesData,
        newMessageText: state.dialogPage.newMessageText
    }
}
const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        onClickCallback: () => {
            dispatch(addNewMessageAC())
        },
        onChangeCallback: (e: ChangeEvent<HTMLTextAreaElement>) => {
            let action = changeNewMessageAC(e)
            dispatch(action)
        }
    }
}

const MessagesContainer = connect(mapStateToProps,mapDispatchToProps)(Messages)

export default MessagesContainer;
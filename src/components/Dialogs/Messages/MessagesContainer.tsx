import React, {ChangeEvent} from 'react';
import {addNewMessageAC, changeNewMessageAC, messageType,} from "../../../redux/dialogs-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    data: Array<messageType>
}
type mapDispatchToPropsType = {
    addNewMessage: (newMessageBody: string) => void
    onChangeCallback: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export type MessagesPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        data: state.dialogPage.messagesData,
    }
}

// example: fully mdtp
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addNewMessage: (newMessageBody: string) => {
            dispatch(addNewMessageAC(newMessageBody))
        },
        onChangeCallback: (e: ChangeEvent<HTMLTextAreaElement>) => {
            let action = changeNewMessageAC(e)
            dispatch(action)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Messages)
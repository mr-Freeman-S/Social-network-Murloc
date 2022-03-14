import {DialogPageType} from "./store";
import {v1} from "uuid";
import {ChangeEvent} from "react";

const dialogsReducer = (state: DialogPageType, action: any) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newTask = {id: v1(), message: state.newMessageText}
            state.messagesData.push(newTask)
            state.newMessageText = ''
            return state
        case CHANGE_MESSAGE:
            state.newMessageText = action.event.currentTarget.value
            return state
        default:
            return state
    }
}

const ADD_MESSAGE = "ADD-NEW-MESSAGE"
const CHANGE_MESSAGE = "CHANGE-NEW-MESSAGE"


export const addNewMessageActionCreator = () => ({type: ADD_MESSAGE})
export const changeNewMessageActionCreator = (e: ChangeEvent<HTMLTextAreaElement>) =>
    ({type: CHANGE_MESSAGE, event: e})

export default dialogsReducer;
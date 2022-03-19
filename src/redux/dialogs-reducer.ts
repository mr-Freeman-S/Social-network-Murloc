import {DialogPageType} from "./store";
import {v1} from "uuid";
import {ChangeEvent} from "react";

let initialState = {
    dialogsData: [
        {id: v1(), name: 'Kate', img: './face_photo/omid-armin-xOjzehJ49Hk-unsplash.jpg'},
        {id: v1(), name: 'Maks', img: './face_photo/nico-marks-763-mBawsfg-unsplash.jpg'},
        {id: v1(), name: 'Artem', img: './face_photo/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'},
        {id: v1(), name: 'Kostya', img: './face_photo/erik-lucatero-d2MSDujJl2g-unsplash.jpg'},
        {id: v1(), name: 'Sveta', img: './face_photo/michael-dam-mEZ3PoFGs_k-unsplash.jpg'}
    ],

    messagesData: [
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'What are you doing now?'},
        {id: v1(), message: 'how are you?'},
        {id: v1(), message: 'Do you want to go to the cinema'}
    ],
    newMessageText: ''
}


const dialogsReducer = (state: DialogPageType = initialState, action: any) => {
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
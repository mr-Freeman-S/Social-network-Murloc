import {v1} from "uuid";
import {ChangeEvent} from "react";

export type dialogsType = {
    id: string
    name: string
    img: string
}
export type messageType = {
    id: string
    message: string
}
export type InitialStateType = {
    dialogsData: Array<dialogsType>
    messagesData: Array<messageType>
}

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
}


const dialogsReducer = (state: InitialStateType = initialState, action: allActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {id: v1(), message: action.newMessageBody}
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
            }
/*        case CHANGE_MESSAGE:
            return {...state, newMessageText: action.payload.event.currentTarget.value}*/
        default:
            return state
    }
}

const ADD_MESSAGE = "ADD-NEW-MESSAGE"
const CHANGE_MESSAGE = "CHANGE-NEW-MESSAGE"

export type allActionsType = changeNewMessageACType | addNewMessageACType

export type addNewMessageACType = ReturnType<typeof addNewMessageAC>
export type changeNewMessageACType = ReturnType<typeof changeNewMessageAC>

export const addNewMessageAC = (newMessageBody:string) => ({type: ADD_MESSAGE , newMessageBody} as const)
export const changeNewMessageAC = (e: ChangeEvent<HTMLTextAreaElement>) => {
    return {
        type: CHANGE_MESSAGE,
        payload: {event: e}
    } as const
}

export default dialogsReducer;
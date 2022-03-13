import {v1} from 'uuid';
import faceMaks from './face_photo/erik-lucatero-d2MSDujJl2g-unsplash.jpg'
import faceKate from './face_photo/omid-armin-xOjzehJ49Hk-unsplash.jpg'
import faceSveta from './face_photo/michael-dam-mEZ3PoFGs_k-unsplash.jpg'
import {ChangeEvent} from "react";


export type messageType = {
    id: string
    message: string
}
export type dialogsType = {
    id: string
    name: string
    img: string
}
export type postType = {
    id: string
    post: string
    likeCount: number
}
export type profilePageType = {
    postData: Array<postType>
    newPost: string
}
export type DialogPageType = {
    dialogsData: Array<dialogsType>
    messagesData: Array<messageType>
    newMessageText: string
}
export type SidebarType = {
    friends: Array<{ name: string, img: string }>
}

export type RootStateType = {
    profilePage: profilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    addNewMessage: () => void
    changeNewMessage: (e: ChangeEvent<HTMLTextAreaElement>) => void
    addNewPost: () => void
    changeNewPost: (e: ChangeEvent<HTMLInputElement>) => void
    subscribe: (observer: (store: StoreType) => void) => void
    dispatch:(action:any)=>void
}

export let store = {
    _state: {
        profilePage: {
            postData: [
                {id: v1(), post: "Hi. My name is Slava", likeCount: 3},
                {id: v1(), post: "HI'm first Murlok here", likeCount: 5},
                {id: v1(), post: "Do you like Murlok?", likeCount: 999},
                {id: v1(), post: "i'm geek", likeCount: -1}
            ],
            newPost: ''
        },
        dialogPage: {
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
        },
        sidebar: {
            friends: [
                {name: 'Maks', img: faceMaks},
                {name: 'Kate', img: faceKate},
                {name: 'Sveta', img: faceSveta}
            ]
        }
    },
    _callSubscriber(state:RootStateType) {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    _addNewMessage() {
        const newTask = {id: v1(), message: this._state.dialogPage.newMessageText}
        this._state.dialogPage.messagesData.push(newTask)
        this._state.dialogPage.newMessageText = ''
        this._callSubscriber(this._state)
    },
    _changeNewMessage(e: ChangeEvent<HTMLTextAreaElement>) {
        this._state.dialogPage.newMessageText = e.currentTarget.value
        this._callSubscriber(this._state)
    },
    _addNewPost() {
        const newPost: postType = {id: v1(), post: this._state.profilePage.newPost, likeCount: 0}
        this._state.profilePage.postData.push(newPost)
        this._state.profilePage.newPost = ''
        console.log(`add new post ${newPost}`)
        this._callSubscriber(this._state)
    },
    _changeNewPost(e: ChangeEvent<HTMLInputElement>) {
        this._state.profilePage.newPost = e.currentTarget.value
        this._callSubscriber(this._state)
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer;
    },


    dispatch(action:any){
        if (action.type === 'ADD-POST'){
            this._addNewPost()
        }else if (action.type === "CHANGE-NEW-MESSAGE"){
            this._changeNewMessage(action.e)
        }else if (action.type === "ADD-NEW-MESSAGE"){
            this._addNewMessage()
        }else if (action.type === "CHANGE-NEW-POST"){
            this._changeNewPost(action.e)
        }
    }
}




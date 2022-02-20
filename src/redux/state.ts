import {v1} from 'uuid';
import faceMaks from './face_photo/erik-lucatero-d2MSDujJl2g-unsplash.jpg'
import faceKate from './face_photo/omid-armin-xOjzehJ49Hk-unsplash.jpg'
import faceSveta from  './face_photo/michael-dam-mEZ3PoFGs_k-unsplash.jpg'

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
}
export type DialogPageType = {
    dialogsData: Array<dialogsType>
    messagesData: Array<messageType>
}
export type SidebarType = {
    friends: Array<{name:string,img:string}>
}

export type RootStateType = {
    profilePage:profilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}

export let state:RootStateType = {
    profilePage: {
        postData: [
            {id: v1(), post: "Hi. My name is Slava", likeCount: 3},
            {id: v1(), post: "HI'm first Murlok here", likeCount: 5},
            {id: v1(), post: "Do you like Murlok?", likeCount: 999},
            {id: v1(), post: "i'm geek", likeCount: -1}
        ]
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
        ]
    },
    sidebar: {
        friends: [
            {name: 'Maks', img: faceMaks},
            {name: 'Kate', img: faceKate},
            {name: 'Sveta', img: faceSveta}
        ]
    }
}

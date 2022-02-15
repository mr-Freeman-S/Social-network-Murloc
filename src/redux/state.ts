import {v1} from 'uuid';

export type messageType = {
    id: string
    message: string
}
export type dialogsType = {
    id: string
    name: string
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
type SidebarType = {}

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
            {id: v1(), name: 'Kate'},
            {id: v1(), name: 'Maks'},
            {id: v1(), name: 'Artem'},
            {id: v1(), name: 'Kostya'},
            {id: v1(), name: 'Sveta'}
        ],

        messagesData: [
            {id: v1(), message: 'How are you?'},
            {id: v1(), message: 'What are you doing now?'},
            {id: v1(), message: 'how are you?'},
            {id: v1(), message: 'Do you want to go to the cinema'}
        ]
    },
    sidebar: {}
}

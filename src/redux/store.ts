import {ChangeEvent} from "react";
import {dialogsType, messageType} from "./dialogs-reducer";
import {postType} from "./profileReducer/profile-reducer";


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
    dispatch: (action: any) => void

}

/*
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
    _callSubscriber(state: RootStateType) {
        console.log('State changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer: (state: RootStateType) => void) {
        this._callSubscriber = observer;
    },

    dispatch(action: any) {
       this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage =  dialogsReducer(this._state.dialogPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
      this._callSubscriber(this._state)
    }
}
*/

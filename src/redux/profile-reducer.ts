import {postType, profilePageType} from "./store";
import {v1} from "uuid";
import {ChangeEvent} from "react";

const ADD_POST = 'ADD-POST'
const CHANGE_POST = "CHANGE-NEW-POST"

let initialState = {
    postData: [
        {id: v1(), post: "Hi. My name is Slava", likeCount: 3},
        {id: v1(), post: "HI'm first Murlok here", likeCount: 5},
        {id: v1(), post: "Do you like Murlok?", likeCount: 999},
        {id: v1(), post: "i'm geek", likeCount: -1}
    ],
    newPost: ''
}

const profileReducer = (state: profilePageType = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: postType = {id: v1(), post: state.newPost, likeCount: 0}
            state.postData.push(newPost)
            state.newPost = ''
            return state
        case CHANGE_POST:
            state.newPost = action.event.currentTarget.value
            return state
        default:
            return state
    }
}

export const addNewPostActionCreator = () => ({type: ADD_POST})
export const changeNewPostActionCreator = (e: ChangeEvent<HTMLInputElement>) =>
    ({type: CHANGE_POST, event: e})

export default profileReducer;
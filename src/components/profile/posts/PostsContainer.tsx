import React from "react";
import {addNewPostAC, postType} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    postData: Array<postType>
}
type mapDispatchToPropsType = {
    addNewPost: (newPost: string) => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        postData: state.profilePage.postData
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addNewPost: (newPost: string) => {
            dispatch(addNewPostAC(newPost))
        },

    }
}


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;
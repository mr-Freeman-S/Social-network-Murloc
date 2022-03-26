import React, {ChangeEvent} from "react";
import {addNewPostAC, changeNewPostAC, postType} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    postData: Array<postType>
    newPost: string
}
type mapDispatchToPropsType = {
    addNewPost: () => void
    onChangeCallback: (event: ChangeEvent<HTMLInputElement>) => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        postData: state.profilePage.postData,
        newPost: state.profilePage.newPost
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addNewPost: () => {
            dispatch(addNewPostAC())
        },
        onChangeCallback: (event: ChangeEvent<HTMLInputElement>) => {
            dispatch(changeNewPostAC(event))
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;
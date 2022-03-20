import React, {ChangeEvent} from "react";
import { StoreType} from "../../../redux/store";
import {addNewPostActionCreator, changeNewPostActionCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";

type PostsContainerPropsType = {
    store:StoreType
}

const PostsContainer = (props: PostsContainerPropsType) => {
    let state = props.store.getState()

    function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        props.store.dispatch(changeNewPostActionCreator(event))
    }

    function onClickAddPost() {
        props.store.dispatch(addNewPostActionCreator())
    }

    return <Posts postData={state.profilePage.postData} addNewPost={onClickAddPost} newPost={state.profilePage.newPost} onChangeCallback={onChangeHandler}/>
}

export default PostsContainer;
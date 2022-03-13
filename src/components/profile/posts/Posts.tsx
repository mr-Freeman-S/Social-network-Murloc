import React, {ChangeEvent, useState} from "react";
import Post from "./post/Post";
import s from './Posts.module.css'
import {addNewPostActionCreator, changeNewPostActionCreator, postType} from "../../../redux/state";
import {v1} from "uuid";


type PostsPropsType = {
    newPost: string
    postData: Array<postType>
    dispatch: (action: any) => void
}

const Posts = (props: PostsPropsType) => {

    let userPosts = props.postData.map(post => <Post {...post} />)


    function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        //props.changeNewPost(event)
        props.dispatch(changeNewPostActionCreator(event))
    }

    function onClickAddNewPost() {
        //props.addNewPost()
        props.dispatch(addNewPostActionCreator())
    }

    return (
        <div className={s.content}><h3>My post:</h3>
            <div>
                <input type={"text"} value={props.newPost} onChange={onChangeHandler} className={s.input}/>
                <div>
                    <button onClick={onClickAddNewPost}>add post</button>
                </div>
            </div>
            {userPosts}
        </div>
    );
}

export default Posts;
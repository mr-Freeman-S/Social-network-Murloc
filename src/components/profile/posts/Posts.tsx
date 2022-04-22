import React, {ChangeEvent} from "react";
import Post from "./post/Post";
import style from './Posts.module.css'
import {postType} from "../../../redux/profile-reducer";

type PostsPropsType = {
    newPost: string
    postData: Array<postType>
    onChangeCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addNewPost: () => void
}

const Posts = (props: PostsPropsType) => {
    let userPosts = props.postData.map(post => <Post {...post} />)

    function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        props.onChangeCallback(event)
    }

    function onClickAddNewPost() {
        props.addNewPost()
    }

    return (
        <div className={style.content}><h3>My post:</h3>
            <div>
                <input type={"text"} value={props.newPost} onChange={onChangeHandler} className={style.input}/>
                <div>
                    <button onClick={onClickAddNewPost}>add post</button>
                </div>
            </div>
            {userPosts}
        </div>
    );
}

export default Posts;
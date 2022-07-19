import React from "react";
import Post from "./post/Post";
import style from './Posts.module.css'
import {postType} from "../../../redux/profileReducer/profile-reducer";
import AddPostFormRedux from "./AddPostForm";

type PostsPropsType = {
    postData: Array<postType>
    addNewPost: (newPost: string) => void
}

const Posts = (props: PostsPropsType) => {
    console.log("RENDER")
    console.log(props)
    let userPosts = props.postData.map(post => <Post {...post} />)


    const submit = (value: any) => {
        props.addNewPost(value.newPostForm)
    }

    return (
        <div className={style.content}><h3>My post:</h3>
            <div>
                <AddPostFormRedux onSubmit={submit}/>
            </div>
            {userPosts}
        </div>
    );
}

export default Posts;
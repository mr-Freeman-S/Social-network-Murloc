import React from "react";
import Post from "./post/Post";
import s from './Posts.module.css'


const Posts = () => {
    const postData = [
        {id: 1, post: "Hi. My name is Slava", likeCount:3},
        {id: 2, post: "HI'm first Murlok here", likeCount:5},
        {id: 3, post: "Do you like Murlok?", likeCount:999},
        {id: 3, post: "i'm geek", likeCount:-1}]

    let userPosts = postData.map(post => <Post message={post.post} like={post.likeCount}/>)
    return (
    <div className={s.content}><h3>My post:</h3>
        <div>
            <textarea></textarea>
            <div><button>add post</button></div>
        </div>
        {userPosts}
    </div>
    );
}

export default Posts;
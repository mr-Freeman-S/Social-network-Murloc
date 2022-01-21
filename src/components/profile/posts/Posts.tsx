import React from "react";
import Post from "./post/Post";
import s from './Posts.module.css'


const Posts = () => {
    return (
    <div>My post
        <div>
            <textarea>Enter new post</textarea>
            <button>add post</button>
        </div>
        <Post message={"Hi. My name is Slava"} like={3}/>
        <Post message={"I'm first Murlok here"} like={5}/>
        <Post message={"Do you like Murlok?"} like={999}/>
    </div>
    );
}

export default Posts;
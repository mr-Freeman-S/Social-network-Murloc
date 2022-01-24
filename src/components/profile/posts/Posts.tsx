import React from "react";
import Post from "./post/Post";
import s from './Posts.module.css'


const Posts = () => {
    return (
    <div className={s.content}><h3>My post:</h3>
        <div>
            <textarea></textarea>
            <div><button>add post</button></div>
        </div>
        <Post message={"Hi. My name is Slava"} like={3}/>
        <Post message={"I'm first Murlok here"} like={5}/>
        <Post message={"Do you like Murlok?"} like={999}/>
    </div>
    );
}

export default Posts;
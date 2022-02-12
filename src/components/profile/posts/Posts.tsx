import React from "react";
import Post from "./post/Post";
import s from './Posts.module.css'

type PostsPropsType = {
    data: Array<PostPropsType>
}

type PostPropsType = {
    id: number
    post: string
    likeCount: number
}

const Posts = (props: PostsPropsType) => {


    let userPosts = props.data.map(post => <Post message={post.post} like={post.likeCount}/>)

    return (
        <div className={s.content}><h3>My post:</h3>
            <div>
                <input type="text" className={s.input}/>
                <div>
                    <button>add post</button>
                </div>
            </div>
            {userPosts}
        </div>
    );
}

export default Posts;
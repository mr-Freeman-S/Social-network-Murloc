import React, {ChangeEvent, useState} from "react";
import Post from "./post/Post";
import s from './Posts.module.css'
import {postType} from "../../../redux/state";
import {v1} from "uuid";


type PostsPropsType = {
    data: Array<postType>
    setPostData: (posts: Array<postType>) => void
}

const Posts = (props: PostsPropsType) => {

    let userPosts = props.data.map(post => <Post {...post} />)

    const [inputState, setInputState] = useState('')

    function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
        setInputState(event.currentTarget.value)
    }

    function onClickAddNewPost() {
        props.setPostData([{id: v1(), post: inputState, likeCount: 777}, ...props.data])
        setInputState('')
    }

    return (
        <div className={s.content}><h3>My post:</h3>
            <div>
                <input value={inputState} onChange={onChangeHandler} type="text" className={s.input}/>
                <div>
                    <button onClick={() => {
                        onClickAddNewPost()
                    }}>add post
                    </button>
                </div>
            </div>
            {userPosts}
        </div>
    );
}

export default Posts;
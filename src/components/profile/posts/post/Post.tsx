import React from "react";
import s from './Post.module.css'

type PostPropsType = {
    message: string ,
    like: number
}

const Post = (props: PostPropsType) => {
    return (
    <div  className={s.item}>
        <img src="https://illustrators.ru/uploads/illustration/image/1160770/main_dmitry-bolotov-murloc.jpg" alt="mrlc"></img>
          {props.message}
        <div>{props.like} Likes</div>
    </div>
    );
}

export default Post;
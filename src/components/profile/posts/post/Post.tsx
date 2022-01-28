import React from "react";
import s from './Post.module.css'
import user from './pngwing.png'
import like from './like.png'

type PostPropsType = {
    message: string,
    like: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <div className={s.userPost}>
                <img className={s.userImg} src={user} alt="like"/>
                {props.message}
            </div>
            <div className={s.like}><img src={like} alt={'like'}/>{props.like}</div>
        </div>
    );
}

export default Post;
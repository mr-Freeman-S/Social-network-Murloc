import React from "react";
import s from './Post.module.css'
import user from './pngwing.png'
import like from './like.png'
import {postType} from "../../../../redux/state";


const Post = (props: postType) => {
    return (
        <div className={s.item}>
            <div className={s.userPost}>
                <img className={s.userImg} src={user} alt="like"/>
                {props.post}
            </div>
            <div className={s.like}><img src={like} alt={'like'}/>{props.likeCount}</div>
        </div>
    );
}

export default Post;
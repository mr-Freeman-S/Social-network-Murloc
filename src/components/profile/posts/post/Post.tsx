import React from "react";
import style from './Post.module.css'
import user from '../../../../assets/postImg/pngwing.png'
import like from '../../../../assets/postImg/like.png'
import {postType} from "../../../../redux/profileReducer/profile-reducer";

const Post = (props: postType) => {
    return (
        <div className={style.item}>
            <div className={style.userPost}>
                <img className={style.userImg} src={user} alt="like"/>
                {props.post}
            </div>
            <div className={style.like}><img src={like} alt={'like'}/>{props.likeCount}</div>
        </div>
    );
}

export default Post;
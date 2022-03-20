import React, {ChangeEvent} from "react";
import Posts from "./posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType, StoreType} from "../../redux/store";
import PostsContainer from "./posts/PostsContainer";


type profileType = /*profilePageType & */{
    /*dispatch:(action:any)=> void*/
    store:StoreType
}

const Profile = (props: profileType) => {
    return (
        <div>
            <ProfileInfo/>
            <PostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;
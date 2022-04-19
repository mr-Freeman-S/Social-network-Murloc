import React, {ChangeEvent} from "react";
import Posts from "./posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType, StoreType} from "../../redux/store";
import PostsContainer from "./posts/PostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


type profilePropsType = {
    profileInfo: ProfileType | null
}

const Profile = (props: profilePropsType) => {
    return (
        <div>
            <ProfileInfo profileInfo={props.profileInfo}/>
            <PostsContainer/>
        </div>
    );
}

export default Profile;
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
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
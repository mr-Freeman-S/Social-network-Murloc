import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./posts/PostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


type profilePropsType = {
    profileInfo: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

const Profile = (props: profilePropsType) => {
    return (
        <div>
            <ProfileInfo status={props.status} updateStatus={props.updateStatus} profileInfo={props.profileInfo}/>
            <PostsContainer/>

        </div>
    );
}

export default Profile;
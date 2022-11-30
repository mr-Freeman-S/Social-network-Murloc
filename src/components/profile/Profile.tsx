import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./posts/PostsContainer";
import {ProfileType} from "../../redux/profileReducer/profile-reducer";


type profilePropsType = {
    profileInfo: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    setPhotos: (photo: any) => void
    ownerId: number | null

}

const Profile = (props: profilePropsType) => {
    return (
        <div>
            <ProfileInfo setPhotos={props.setPhotos} ownerId={props.ownerId} status={props.status}
                         updateStatus={props.updateStatus} profileInfo={props.profileInfo}/>
            <PostsContainer/>

        </div>
    );
}

export default Profile;
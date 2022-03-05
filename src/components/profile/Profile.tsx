import React, {ChangeEvent} from "react";
import Posts from "./posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";


type profileType = profilePageType & {
    addNewPost: () => void
    changeNewPost: (e: ChangeEvent<HTMLInputElement>) => void
}

const Profile = (props: profileType) => {

    return (
        <div>
            <ProfileInfo/>
            <Posts changeNewPost={props.changeNewPost} addNewPost={props.addNewPost} newPost={props.newPost} postData={props.postData}/>
        </div>
    );
}

export default Profile;
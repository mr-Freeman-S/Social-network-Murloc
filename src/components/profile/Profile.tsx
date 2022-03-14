import React, {ChangeEvent} from "react";
import Posts from "./posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/store";


type profileType = profilePageType & {
    dispatch:(action:any)=> void
}

const Profile = (props: profileType) => {

    return (
        <div>
            <ProfileInfo/>
            <Posts dispatch={props.dispatch}  newPost={props.newPost} postData={props.postData}/>
        </div>
    );
}

export default Profile;
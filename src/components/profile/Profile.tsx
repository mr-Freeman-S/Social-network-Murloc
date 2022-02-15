import React, {useState} from "react";
import Posts from "./posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";


const Profile = (props:profilePageType) => {
    const [postData,setPostData] = useState(props.postData)

    return (
        <div>
            <ProfileInfo  />
            <Posts data={postData} setPostData={setPostData} />
        </div>
    );
}

export default Profile;
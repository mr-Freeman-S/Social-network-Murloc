import React from "react";
import Posts from "./posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    const postData = [
        {id: 1, post: "Hi. My name is Slava", likeCount:3},
        {id: 2, post: "HI'm first Murlok here", likeCount:5},
        {id: 3, post: "Do you like Murlok?", likeCount:999},
        {id: 3, post: "i'm geek", likeCount:-1}]

    return (
        <div>
            <ProfileInfo  />
            <Posts data={postData} />
        </div>
    );
}

export default Profile;
import React from "react";
import Posts from "./posts/Posts";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div>
          <img className={s.wallpaper}
            src="https://farming.org.ua/files/rye/%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F%20%D0%B2%D1%8B%D1%80%D0%B0%D1%89%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%BE%D0%B7%D0%B8%D0%BC%D0%BE%D0%B9%20%D1%80%D0%B6%D0%B8.jpg"
            alt="pic"
          />
          <div>ava + description</div>
          <Posts />
      </div>
    );
}

export default Profile;
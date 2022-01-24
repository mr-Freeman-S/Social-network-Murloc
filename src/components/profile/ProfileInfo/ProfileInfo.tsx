import React from "react";
import userIcon from './pngwing1.png'
import s from './ProfileInfo.module.css'

const ProfileInfo = (props: any) => {
    return (
        <div className={s.content}>
            <div className={s.profileInf}><img className={s.userIcon}
                      src={userIcon}
                      alt="userIcon"/>
            </div>

            <div className={s.profileInf}>
                <div><h1>Slava B</h1></div>
                <div><h4>Date of Birthday: 19 december </h4></div>
                <div><h4>City: Minsk </h4></div>
                <div><h4>Education: it-incubator </h4></div>
                <div><h4>Web Site: None </h4></div>

            </div>

        </div>
    );
}

export default ProfileInfo;
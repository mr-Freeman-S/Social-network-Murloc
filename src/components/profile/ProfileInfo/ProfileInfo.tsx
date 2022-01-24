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
                <div>Date of Birthday: 19 december</div>
                <div>City: Minsk</div>
                <div>Education: it-incubator</div>
                <div>Web Site: None</div>

            </div>

        </div>
    );
}

export default ProfileInfo;
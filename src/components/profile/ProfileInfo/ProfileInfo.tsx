import React from "react";
import userIcon from './pngwing1.png'
import style from './ProfileInfo.module.css'

type ProfileInfoPropsType = {

}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div className={style.content}>
            <div className={style.profileInf}>
                <img className={style.userIcon}
                     src={userIcon}
                     alt="userIcon"/>
            </div>

            <div className={style.profileInf}>
                <div>
                    <h1>Slava B</h1>
                </div>
                <div>Date of Birthday: 19 december</div>
                <div>City: Minsk</div>
                <div>Education: it-incubator</div>
                <div>Web Site: None</div>

            </div>

        </div>
    );
}

export default ProfileInfo;
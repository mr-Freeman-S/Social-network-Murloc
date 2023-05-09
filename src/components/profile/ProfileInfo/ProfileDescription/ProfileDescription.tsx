import React from 'react';
import style from './../ProfileInfo.module.css';

type ProfileDescriptionType = {
    editModeOn: boolean
    lookingForAJob: boolean | undefined
    aboutMe?: string | null | undefined
    lookingForAJobDescription?:  boolean | null | undefined
}
export const ProfileDescription: React.FC<ProfileDescriptionType> = (props) => {
    return (
        <div className={style.contacts}>
            <h3>Info</h3>
            <ul>
                <li><span>Looking for a job: </span><span>{props.editModeOn ? <input /> : props.lookingForAJob}</span></li>
                <li>
                    <span>Looking for a job description:</span><span>{props.editModeOn ? <input/>: props.lookingForAJobDescription}</span>
                </li>
                <li><span>About me: </span><span>{props.editModeOn ? <input/> : props.aboutMe}</span></li>
            </ul>
        </div>
    );
};


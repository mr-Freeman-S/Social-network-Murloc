import React from "react";
import userIcon from '../../../assets/pngwing1.png'
import style from './ProfileInfo.module.css'
import {ProfileType} from "../../../redux/profileReducer/profile-reducer";
import StatusText from "./StatusText";
import {useDispatch} from "react-redux";

type ProfileInfoPropsType = {
    profileInfo: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    setPhotos: (photo: any) => void
    ownerId: number | null
}

const ProfileInfo = (props: ProfileInfoPropsType) => {

    const onUploadMainImage  = (e:React.ChangeEvent<HTMLInputElement>) => {
        debugger
        if(e.target.files){
            props.setPhotos(e.target.files[0])
        }
    }
    return (
        <div className={style.content}>
            <div><h1>{props.profileInfo?.fullName}</h1>
                <StatusText status={props.status} updateStatus={props.updateStatus}/>

                <div className={style.profileInf}>{props.profileInfo?.aboutMe}</div>
                <div className={style.profileInf}>
                    <img className={style.userIcon}
                         src={props.profileInfo?.photos.large ? props.profileInfo?.photos.large : userIcon}
                         alt="userIcon"/>
                    {props.ownerId == props.profileInfo?.userId && <input onChange={onUploadMainImage} type="file"/>}
                </div>
            </div>
            <div className={style.contacts}>
                <h3>Contacts</h3>
                {/*bad practice for contacts need refactor*/}
                <div>{props.profileInfo?.contacts.vk ? `vk: ${props.profileInfo?.contacts.vk}` : ``}</div>
                <div>{props.profileInfo?.contacts.website ? `website: ${props.profileInfo?.contacts.website}` : ``}</div>
                <div>{props.profileInfo?.contacts.youtube ? `youtube: ${props.profileInfo?.contacts.youtube}` : ``}</div>
                <div>{props.profileInfo?.contacts.twitter ? `twitter: ${props.profileInfo?.contacts.twitter}` : ``}</div>
                <div>{props.profileInfo?.contacts.facebook ? `facebook: ${props.profileInfo?.contacts.facebook}` : ``}</div>
                <div>{props.profileInfo?.contacts.mainLink ? `mainLink: ${props.profileInfo?.contacts.mainLink}` : ``}</div>
                <div>{props.profileInfo?.contacts.instagram ? `instagram: ${props.profileInfo?.contacts.instagram}` : ``}</div>
                <div>{props.profileInfo?.contacts.github ? `github: ${props.profileInfo?.contacts.github}` : ``}</div>
            </div>

        </div>
    );
}

export default ProfileInfo;
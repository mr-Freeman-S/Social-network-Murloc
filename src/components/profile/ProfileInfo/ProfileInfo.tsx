import React from "react";
import userIcon from '../../../assets/pngwing1.png'
import style from './ProfileInfo.module.css'
import {ProfileType, setEditMode} from "../../../redux/profileReducer/profile-reducer";
import StatusText from "./StatusText";
import ContactsProfile from "./Contacts/ContactsProfile";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Button} from "@mui/material";

type ProfileInfoPropsType = {
    profileInfo: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    setPhotos: (photo: any) => void
    ownerId: number | null
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    const isEditMode = useSelector<AppStateType, boolean>(state => state.profilePage.isEditMode)
    const dispatch = useDispatch()

    const onUploadMainImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        debugger
        if (e.target.files) {
            props.setPhotos(e.target.files[0])
        }
    }
    const setEditModeHandler = () => {
        dispatch(setEditMode(!isEditMode))
    }
    return (
        <div className={style.content}>
            <div><h1>{props.profileInfo?.fullName}</h1>
                <StatusText status={props.status} updateStatus={props.updateStatus}
                            isOwner={props.ownerId === props.profileInfo?.userId}/>


                <div className={style.profileInf}>{props.profileInfo?.aboutMe}</div>
                <div className={style.profileInf}>
                    <img className={style.userIcon}
                         src={props.profileInfo?.photos.large ? props.profileInfo?.photos.large : userIcon}
                         alt="userIcon"/>
                    {props.ownerId === props.profileInfo?.userId &&
                        <Button variant="contained" component="label">Загрузить фото<input hidden
                                                                                           onChange={onUploadMainImage}
                                                                                           type="file"/></Button>}
                </div>
            </div>
            <div className={style.contacts}>
                <h3>Contacts</h3>
                <ul>
                    {props.profileInfo ? Object.keys(props.profileInfo.contacts).map((key) => {
                        if (props.profileInfo) {
                            return <ContactsProfile isEditMode={isEditMode} contactTitle={key}
                                // @ts-ignore
                                                    contactValue={props.profileInfo.contacts[key]}/>
                        }
                        return null
                    }) : null}
                </ul>
            </div>
            <div>{props.ownerId === props.profileInfo?.userId && (isEditMode ?
                <Button variant="contained" onClick={setEditModeHandler}>Save profile</Button> :
                <Button variant="contained" onClick={setEditModeHandler}>Edit profile</Button>)}
            </div>
        </div>
    );
}

export default ProfileInfo;
import {SidebarType} from "./store";
import faceMaks from "./../assets/face_photo/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import faceKate from "./../assets/face_photo/nico-marks-763-mBawsfg-unsplash.jpg";
import faceSveta from "./../assets/face_photo/omid-armin-xOjzehJ49Hk-unsplash.jpg";

const initialState = {
    friends: [
        {name: 'Maks', img: faceMaks},
        {name: 'Kate', img: faceKate},
        {name: 'Sveta', img: faceSveta}
    ]
}

const sidebarReducer = (state: SidebarType = initialState, action: any) => {
    return state
}
export default sidebarReducer;
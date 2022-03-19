import {SidebarType} from "./store";
import faceMaks from "./face_photo/erik-lucatero-d2MSDujJl2g-unsplash.jpg";
import faceKate from "./face_photo/omid-armin-xOjzehJ49Hk-unsplash.jpg";
import faceSveta from "./face_photo/michael-dam-mEZ3PoFGs_k-unsplash.jpg";

let initialState = {
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
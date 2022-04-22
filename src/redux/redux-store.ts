import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebarReducer";
import {userReducer} from "./user-reducer";


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
    userPage: userReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store: AppStateType = createStore(rootReducer)


export default store;
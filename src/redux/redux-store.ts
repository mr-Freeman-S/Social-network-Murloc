import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebarReducer";
import {userReducer} from "./user-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk"

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
    userPage: userReducer,
    auth:authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer,applyMiddleware(thunkMiddleWare))


export default store;
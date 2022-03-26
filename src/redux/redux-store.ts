import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebarReducer";
import {StoreType} from "./store";




const rootReducer = combineReducers({
     profilePage :profileReducer,
     dialogPage: dialogsReducer,
     sidebar:sidebarReducer
})

export type AppStateType =  ReturnType<typeof rootReducer>

let store:StoreType = createStore(rootReducer)


export default store;
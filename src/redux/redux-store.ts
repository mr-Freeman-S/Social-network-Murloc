import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebarReducer";
import {StoreType} from "./store";


const reducers = combineReducers({
     profilePage :profileReducer,
     dialogPage: dialogsReducer,
     sidebar:sidebarReducer
})

let store:StoreType = createStore(reducers)



export default store;
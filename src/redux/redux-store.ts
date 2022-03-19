import {createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebarReducer";
import {StoreType} from "./store";


const reducers:any = {
     profilePage :profileReducer,
     dialogPage: dialogsReducer,
     sidebar:sidebarReducer
}
debugger
let store:StoreType = createStore(reducers)



export default store;
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebarReducer";
import {userReducer} from "./user-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleWare from "redux-thunk";
import {reducer as formReducer} from "redux-form"

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
    userPage: userReducer,
    auth: authReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleWare)
));
//let store = createStore(rootReducer, applyMiddleware(thunkMiddleWare))


export default store;
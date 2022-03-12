import React, {ChangeEvent} from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Settings} from "./components/Setting/Settings";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {DialogPageType, profilePageType, SidebarType, store, StoreType} from "./redux/state";


type AppPropsType = {
    store : StoreType
}

function App(props: AppPropsType) {
    //console.log(props.dialogPage.dialogsData)
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar friendsBar={props.store.getState().sidebar}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile' element={<Profile changeNewPost={props.store.changeNewPost.bind(store)} addNewPost={props.store.addNewPost.bind(store)} {...props.store.getState().profilePage}/>}/>
                        <Route path='/dialogs' element={<Dialogs changeNewMessage={props.store.changeNewMessage.bind(store)} addNewMessage={props.store.addNewMessage.bind(store)} {...props.store.getState().dialogPage}/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/news' element={<News/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
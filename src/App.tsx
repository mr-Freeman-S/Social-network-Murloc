import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {StoreType} from "./redux/store";
import ContainerUsers from "./components/Users/ContainerUsers";


type AppPropsType = {
/*    state : RootStateType
    dispatch:(action:any)=> void*/
    store:StoreType
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
                        <Route path='/profile' element={<Profile store={props.store}/>}/>
                        <Route path='/dialogs' element={<Dialogs store={props.store}/>}/>
                        <Route path='/users' element={<ContainerUsers/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
import React from 'react';

import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContainerUsers from "./components/Users/ContainerUsers";
import ProfileContainer from "./components/profile/ContainerProfile"


type AppPropsType = {
/*    state : RootStateType
    dispatch:(action:any)=> void*/
}

function App(props: AppPropsType) {
    //console.log(props.dialogPage.dialogsData)
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile' element={<ProfileContainer />}>
                            <Route path={':userID'} element={<ProfileContainer/>}/>
                        </Route>
                        <Route path='/dialogs' element={<Dialogs/>}/>
                        <Route path='/users' element={<ContainerUsers/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
import React from 'react';

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContainerUsers from "./components/Users/ContainerUsers";
import ProfileContainer from "./components/profile/ContainerProfile"
import ContainerHeader from "./components/Header/ContainerHeader";
import LoginPage from "./components/Login/LoginPage";



function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <ContainerHeader/>
                <Navbar />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/login' element={<LoginPage/>}/>
                        <Route path='/profile' element={<ProfileContainer />}>
                            <Route path={':userID'} element={<ProfileContainer/>}/>
                        </Route>
                        <Route path='/dialogs' element={<Dialogs />}/>
                        <Route path='/users' element={<ContainerUsers/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
import React from 'react';

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContainerUsers from "./components/Users/ContainerUsers";
import ContainerHeader from "./components/Header/ContainerHeader";
import LoginPage from "./components/Login/LoginPage";
import ContainerProfile from "./components/profile/ContainerProfile";



function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <ContainerHeader/>
                <Navbar />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile' element={<ContainerProfile />}>
                            <Route path={':userID'} element={<ContainerProfile/>}/>
                        </Route>
                        <Route path='/dialogs' element={<Dialogs />}/>
                        <Route path='/users' element={<ContainerUsers/>}/>
                        <Route path='/login' element={<LoginPage/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
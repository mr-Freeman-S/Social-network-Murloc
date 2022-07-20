import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ContainerHeader from "./components/Header/ContainerHeader";
import LoginPage from "./components/Login/LoginPage";
import ContainerProfile from "./components/profile/ContainerProfile";

const ContainerUsers = React.lazy(() => import("./components/Users/ContainerUsers"));


function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <ContainerHeader/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile/:userID' element={<ContainerProfile/>}>
                        </Route>
                        <Route path='/dialogs' element={<Dialogs/>}/>
                        <Route path='/users' element={
                            <React.Suspense fallback={<div>Загрузка...</div>}>
                                <ContainerUsers/>
                            </React.Suspense>}/>
                        <Route path='/login' element={<LoginPage/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
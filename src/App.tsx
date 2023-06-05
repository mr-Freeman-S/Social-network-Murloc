import React, {useEffect} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {
    BrowserRouter,
    HashRouter,
    Navigate,
    redirect,
    Route,
    Routes,
    useNavigate,
    useNavigation
} from "react-router-dom";
import ContainerHeader from "./components/Header/ContainerHeader";
import LoginPage from "./components/Login/LoginPage";
import ContainerProfile from "./components/profile/ContainerProfile";
import {useSelector} from "react-redux";
import {AppStateType} from "./redux/redux-store";

const ContainerUsers = React.lazy(() => import("./components/Users/ContainerUsers"));


function App() {


    return (
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
    );
}

export default App;
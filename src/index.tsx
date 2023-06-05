import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter, HashRouter} from "react-router-dom";


const rerenderEntireTree = (store: any) => {
    render(
        <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
        </HashRouter>
        , document.getElementById('root'));
}
rerenderEntireTree(store)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

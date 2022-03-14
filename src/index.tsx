import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from "./reportWebVitals";
import {RootStateType, store, } from "./redux/store";

const rerenderEntireTree = (state: RootStateType) => {
    render(<React.StrictMode>
        <App state={state} dispatch={store.dispatch} />
    </React.StrictMode>, document.getElementById('root'));
}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

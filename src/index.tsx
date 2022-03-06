import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {addNewMessage, addNewPost, changeNewMessage, changeNewPost, state, subscribe} from "./redux/state";
import reportWebVitals from "./reportWebVitals";

const rerenderEntireTree = (state:any)=> {
    render(<React.StrictMode>
        <App changeNewPost={changeNewPost} addNewPost={addNewPost} {...state} addNewMessage={addNewMessage} changeNewMessage={changeNewMessage}/>
    </React.StrictMode>, document.getElementById('root'));
}
rerenderEntireTree(state)
subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

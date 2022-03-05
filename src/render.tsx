import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import {addNewMessage, addNewPost, changeNewMessage, changeNewPost} from "./redux/state";

export const rerenderEntireTree = (state:any)=> {
    render(<React.StrictMode>
        <App changeNewPost={changeNewPost} addNewPost={addNewPost} {...state} addNewMessage={addNewMessage} changeNewMessage={changeNewMessage}/>
    </React.StrictMode>, document.getElementById('root'));
}

import React, {ChangeEvent} from 'react';
import s from "../Dialogs.module.css";
import { messageType} from "../../../redux/state";


type MessagePropsType = {
    data:  Array<messageType>
    newMessageText:string
    dispatch:(action:any)=> void

}

const Messages = (props: MessagePropsType) => {
    let userMessages = props.data.map(m => <div className={s.messages}>{m.message}</div>)
    const onChangeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
      props.dispatch({type:'CHANGE-NEW-MESSAGE', e:e})
    }
    const onClickHandler = () => {
      props.dispatch({type:'ADD-NEW-MESSAGE'})
    }
    return (
        <div className={s.messages}>
            {userMessages}
            <div><textarea placeholder='Enter message' onChange={onChangeHandler} value={props.newMessageText} cols={50} rows={3}/>
            <button onClick={onClickHandler} >add post</button></div>
        </div>
    );
};

export default Messages;
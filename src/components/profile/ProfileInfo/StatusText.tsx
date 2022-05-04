import React, {useState} from 'react';

type StatusTextType ={
    status:string
    updateStatus:(status:string)=>void
}

const StatusText = (props:StatusTextType) => {
    const [editToggle, setEditToggle] = useState<boolean>(false)
    const [status,setStatus]= useState<string>(props.status)
    const onDoubleClickHandler = ()=> {
        setEditToggle(true)
    }
    const onBlurHandler = () =>{
        setEditToggle(false)
        props.updateStatus(status)
    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <>
            {editToggle ?
                <input autoFocus onBlur={onBlurHandler} onChange={onChangeHandler} value={status} type="text"/> :
                <span onDoubleClick={onDoubleClickHandler} >{props.status ? props.status: "------"}</span>}
        </>
    );
};

export default StatusText;
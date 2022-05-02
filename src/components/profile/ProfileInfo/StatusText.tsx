import React, {useState} from 'react';

const StatusText = () => {
    const [editToggle, setEditToggle] = useState<boolean>(false)
    const onDoubleClickHandler = ()=> {
        setEditToggle(true)
    }
    const onBlurHandler = () =>{
        setEditToggle(false)
    }
    return (
        <>
            {editToggle ?
                <input autoFocus onBlur={onBlurHandler} value={`Hi There`} type="text"/> :
                <span onDoubleClick={onDoubleClickHandler} >Hi There</span>}
        </>
    );
};

export default StatusText;
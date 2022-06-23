import React, {ChangeEvent, useState} from 'react';

type StatusTextType = {
    status: string
    updateStatus: (status: string) => void
}

const StatusText: React.FC<StatusTextType> = ({status, updateStatus}) => {

    const [editToggle, setEditToggle] = useState(false)
    const [valueStatus, setValueStatus] = useState(status)

    const onDoubleClickHandler = () => {
        setEditToggle(true)
    }

    const onBlurHandler = () => {
        setEditToggle(false)
        updateStatus(valueStatus)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValueStatus(e.currentTarget.value)
    }

    return (
        <>
            {editToggle ?
                <input autoFocus onBlur={onBlurHandler} onChange={onChangeHandler}
                       value={valueStatus} type="text"/> :
                <span
                    onDoubleClick={onDoubleClickHandler}>{status || "------"}</span>}
        </>
    );
}


export default StatusText;

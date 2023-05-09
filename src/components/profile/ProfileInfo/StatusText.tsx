import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from "@mui/material";
import {EditIcon} from "../../../assets/icons/EditIcon";

type StatusTextType = {
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

const StatusText: React.FC<StatusTextType> = ({status, updateStatus,isOwner}) => {

    const [editToggle, setEditToggle] = useState(false)
    const [valueStatus, setValueStatus] = useState(status)

    useEffect(() => {
        setValueStatus(status)
    }, [status])

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
            { isOwner ? editToggle ?
                <input autoFocus onBlur={onBlurHandler} onChange={onChangeHandler}
                       value={valueStatus} type="text"/> :
            <Button style={{color: "black"}} onDoubleClick={onDoubleClickHandler} startIcon={<EditIcon/>} variant="text">{status || "------"}</Button>
                : <span>{status || "------"}</span>
            }
        </>
    );
}


export default StatusText;

import React, {useState} from 'react';

type ContactsPropsType = {
    contactTitle: string
    contactValue: string | null
    isEditMode: boolean
}

const ContactsProfile = ({isEditMode,contactValue,contactTitle}:ContactsPropsType) => {
    const [text,setText] = useState(contactValue || '')
    return (
        <li>
            {isEditMode ? <span><span>{contactTitle} </span><input type='text' onChange={(e)=>setText(e.target.value)} value={text} /></span> :<span><span>{contactTitle} </span> : <span> {contactValue}</span></span> }
        </li>
    );
};

export default ContactsProfile;
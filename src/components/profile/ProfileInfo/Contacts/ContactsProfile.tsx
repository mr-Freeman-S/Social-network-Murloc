import React from 'react';

type ContactsPropsType = {
    contactTitle: string
    contactValue: string | null
}

const ContactsProfile = ({contactValue,contactTitle}:ContactsPropsType) => {

    return (
        <li>
            <span>{contactTitle} </span> : <span> {contactValue}</span>
        </li>
    );
};

export default ContactsProfile;
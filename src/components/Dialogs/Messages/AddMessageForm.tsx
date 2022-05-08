import React from 'react';
import {Field, reduxForm} from "redux-form";


const AddMessageForm = (props: any) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={"textarea"} name={"newMessageBody"} placeholder='Enter message'/>

                <button>add post</button>
            </div>
        </form>
    );
};
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageFormRedux"})(AddMessageForm)
export default AddMessageFormRedux;
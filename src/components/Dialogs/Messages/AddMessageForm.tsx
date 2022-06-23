import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../untils/validators";
import {Textarea} from "../../common/FormsControls/FormControls";

const maxLengthHandler = maxLength(30)

const AddMessageForm = (props: any) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field component={Textarea} validate={[maxLengthHandler, required]} name={"newMessageBody"}
                       placeholder='Enter message'/>

                <button>add post</button>
            </div>
        </form>
    );
};
const AddMessageFormRedux = reduxForm({form: "dialogAddMessageFormRedux"})(AddMessageForm)
export default AddMessageFormRedux;
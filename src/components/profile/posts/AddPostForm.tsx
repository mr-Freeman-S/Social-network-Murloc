import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormControls";
import {maxLength, required} from "../../../untils/validators";


const maxLengthPost = maxLength(250)
const AddPost = (props: any) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field component={Textarea} validate={[required,maxLengthPost]} name={"newPostForm"} placeholder={"add new post"}/>
            <div>
                <button>add post</button>
            </div>
        </form>
    );
};

const AddPostFormRedux = reduxForm({form: "addPost"})(AddPost)

export default AddPostFormRedux;
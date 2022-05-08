import React from 'react';
import {Field, reduxForm} from "redux-form";

const AddPost = (props: any) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field component={"input"} name={"newPostForm"} placeholder={"add new post"}/>
            <div>
                <button>add post</button>
            </div>
        </form>
    );
};

const AddPostFormRedux = reduxForm({form: "addPost"})(AddPost)

export default AddPostFormRedux;
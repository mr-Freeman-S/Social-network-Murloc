import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../untils/validators";
import {loginThunk} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";

export type LoginValueType = {
    email:string
    password:string
    rememberMe:boolean
}


const LoginPage = (props:any) => {
    const submit = (value:any) => {
        props.loginThunk(value.email,value.password,value.rememberMe)
    }
    return (
        <div>
            <h1>Login</h1>
            <WithReduxFormLogin onSubmit={submit}/>
        </div>
    );
};


const Login: React.FC<any> = (props) => {
    const {handleSubmit} = props


    return (
        <form onSubmit={handleSubmit}>
            <div><Field validate={[required]} name={'email'} type={'text'} component={Input}/></div>
            <div><Field validate={[required]} name={'password'} type={'password'} component={Input}/></div>
            <div><Field name={'rememberMe'} type={'checkbox'} component={"input"}/>Remember me</div>
            <div>
                {props.error}
            </div>
            <div>
                <button>login</button>
            </div>
        </form>)
}
const WithReduxFormLogin = reduxForm({form: 'login'})(Login)

export default connect(null,{loginThunk})(LoginPage);
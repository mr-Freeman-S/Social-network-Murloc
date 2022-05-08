import React from 'react';
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {maxLength, required} from "../../untils/validators";

const LoginPage: React.FC = (props) => {
    const submit = (value:any) => {
        console.log(value)
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
            <div><Field validate={[required]} name={'login'} type={'text'} component={Input}/></div>
            <div><Field validate={[required]} name={'password'} type={'password'} component={Input}/></div>
            <div><Field name={'rememberMe'} type={'checkbox'} component={"input"}/>Remember me</div>
            <div>
                <button>login</button>
            </div>
        </form>)
}
const WithReduxFormLogin = reduxForm({form: 'login'})(Login)

export default LoginPage;
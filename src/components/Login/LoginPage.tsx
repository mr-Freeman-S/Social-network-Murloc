import React from 'react';
import {Field, reduxForm} from "redux-form";

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
            <div><Field name={'login'} type={'text'} component={"input"}/></div>
            <div><Field name={'password'} type={'password'} component={"input"}/></div>
            <div><Field name={'rememberMe'} type={'checkbox'} component={"input"}/></div>
            <div>
                <button onClick={()=> {}}>login</button>
            </div>
        </form>)
}
const WithReduxFormLogin = reduxForm({form: 'login'})(Login)

export default LoginPage;
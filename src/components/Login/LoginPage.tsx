import React, {FormEventHandler, useEffect} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../untils/validators";
import {loginThunk} from "../../redux/authReducer/auth-reducer";
import {connect, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

export type LoginValueType = {
    email: string
    password: string
    rememberMe: boolean
}
type SubmitValueType = {
    email: string
    password: string
    rememberMe: boolean
}

type LoginFormPropsType = {
    handleSubmit: FormEventHandler<HTMLFormElement>
    error: string
}
type LoginPagePropsType = {
    loginThunk: (email: string, password: string, rememberMe: boolean) => void
}

const LoginPage = (props: LoginPagePropsType) => {
    const submit = (value: any) => {
        props.loginThunk(value.email, value.password, value.rememberMe)

    }
    return (
        <div>
            <h1>Login</h1>
            <WithReduxFormLogin onSubmit={submit}/>
        </div>
    );
};


const LoginForm: React.FC<InjectedFormProps> = (props) => {
    const isAuthorized = useSelector<AppStateType>(state => state.auth.isAuthorized)
    const id = useSelector<AppStateType>(state => state.auth.id)
    const navigate = useNavigate()
    const redirectToProfileOrAuth = () => {
        isAuthorized ? navigate(`/profile/${id}`) : navigate('/login')
    }
    useEffect(() => {
        redirectToProfileOrAuth()
    }, [isAuthorized])
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
            <div>
                <h2>Test account : free@samuraijs.com</h2>
                <h2>Password : free</h2>
            </div>
        </form>)
}
const WithReduxFormLogin = reduxForm({form: 'login'})(LoginForm)

export default connect(null, {loginThunk})(LoginPage);
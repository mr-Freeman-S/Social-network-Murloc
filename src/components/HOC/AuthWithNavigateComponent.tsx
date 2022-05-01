import {AppStateType} from "../../redux/redux-store";
import React from 'react'
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

type mapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType) => {
    isAuth: state.auth.isAuthorized
}

export const WithAuthNavigateComponent = (Component: any) => {
    const NavigateComponent = (props: any) => {
        if (!props.isAuth) return <Navigate replace to='/login'/>
        return <Component {...props}/>
    };

    let ConnectedAuthNavigateComponent = connect(mapStateToProps)(NavigateComponent)
    return ConnectedAuthNavigateComponent
}


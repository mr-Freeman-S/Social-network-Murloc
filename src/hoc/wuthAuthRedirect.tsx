import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Navigate} from "react-router-dom";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {isAuth: state.auth.isAuthorized}
}

export const withAuthRedirect = (Component: any) => {
    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props
        if(!isAuth) return <Navigate replace to="/login"/>
        return <Component {...restProps} />
    }
    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirectComponent
}
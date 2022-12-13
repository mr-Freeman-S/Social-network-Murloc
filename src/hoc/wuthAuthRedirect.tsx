import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Navigate} from "react-router-dom";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {isAuth: state.auth.isAuthorized}
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate replace to="/login"/>
        // @ts-ignore
        return <Component {...restProps as T} />
    }
    return connect(mapStateToProps)(RedirectComponent)
}
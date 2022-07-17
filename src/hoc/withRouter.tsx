import {useLocation, useNavigate, useParams} from "react-router-dom";
import React, {JSXElementConstructor} from "react";
import {userMapDispatchToPropsType, userMapStateToPropsType} from "../components/profile/ContainerProfile";


//HOC
export const withRouter = (Component: JSXElementConstructor<userMapDispatchToPropsType & userMapStateToPropsType>): JSXElementConstructor<userMapDispatchToPropsType & userMapStateToPropsType> => {
    function ComponentWithRouterProp(props: any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        debugger
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}
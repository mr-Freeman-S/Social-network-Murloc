import { useLocation, useNavigate, useParams} from "react-router-dom";
import React, {JSXElementConstructor} from "react";


//HOC
export const  withRouter=(Component:JSXElementConstructor<any>):JSXElementConstructor<any>=> {
    function ComponentWithRouterProp(props:any) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}
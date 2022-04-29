import React from "react";
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {authMeThunk} from "../../redux/auth-reducer";
import {connect} from "react-redux";

type ContainerHeaderPropsType = mapStateToPropsType &{
    authMeThunk:()=>void
}

class ContainerHeader extends React.Component<ContainerHeaderPropsType, any> {

    componentDidMount() {
        this.props.authMeThunk()
        /*this.props.setFetchingAC(true)
        getAuthMe().then(
            data => {
                if(data.resultCode === 0){
                this.props.setAuthUserDataAC(data.data)
                }
                this.props.setFetchingAC(false)

            }
        )*/
    }

    render() {
        return <Header
            isAuthorized={this.props.isAuthorized}
            login={this.props.login}
            isFetching={this.props.isFetching}
        />;
    }
}
type mapStateToPropsType = {
    login:string | null
    isAuthorized: boolean
    isFetching: boolean
}
const mapStateToProps = (state: AppStateType):mapStateToPropsType => ({
    login: state.auth.login,
    isAuthorized: state.auth.isAuthorized,
    isFetching: state.auth.isFetching
})

export default connect(mapStateToProps, {authMeThunk})(ContainerHeader)
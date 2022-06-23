import React from "react";
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {authMeThunk, logoutThunk} from "../../redux/auth-reducer";
import {connect} from "react-redux";

type ContainerHeaderPropsType = mapStateToPropsType & {
    authMeThunk: () => void
    logoutThunk: () => void
}

class ContainerHeader extends React.Component<ContainerHeaderPropsType, any> {

    componentDidMount() {
        this.props.authMeThunk()
    }

    render() {
        return <Header
            logoutThunk={this.props.logoutThunk}
            isAuthorized={this.props.isAuthorized}
            login={this.props.login}
            isFetching={this.props.isFetching}
        />;
    }
}

type mapStateToPropsType = {
    login: string | null
    isAuthorized: boolean
    isFetching: boolean
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    login: state.auth.login,
    isAuthorized: state.auth.isAuthorized,
    isFetching: state.auth.isFetching
})

export default connect(mapStateToProps, {authMeThunk, logoutThunk})(ContainerHeader)
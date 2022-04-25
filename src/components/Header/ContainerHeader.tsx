import React from "react";
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserDataAC, setFetchingAC, userAuthData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {getAuthMe} from "../../api/api";

type ContainerHeaderPropsType = mapStateToPropsType &{
    setAuthUserDataAC: (userData: userAuthData) => void
    setFetchingAC:(isFetching:boolean)=> void
}

class ContainerHeader extends React.Component<ContainerHeaderPropsType, any> {

    componentDidMount() {
        this.props.setFetchingAC(true)
        getAuthMe().then(
            data => {
                if(data.resultCode === 0){
                this.props.setAuthUserDataAC(data.data)
                }
                this.props.setFetchingAC(false)

            }
        )
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

export default connect(mapStateToProps, {setAuthUserDataAC, setFetchingAC})(ContainerHeader)
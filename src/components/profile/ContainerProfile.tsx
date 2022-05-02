import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfileThunk, ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "../Users/withRouter";
import {withAuthRedirect} from "../../hoc/wuthAuthRedirect";
import {compose} from "redux";

type mapStateToPropsType = {
    profileInfo: ProfileType | null
    isAuth: boolean
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getProfileThunk: (userID: number) => object
}
type ContainerProfileType = mapStateToPropsType & mapDispatchToPropsType

class ContainerProfile extends React.Component<ContainerProfileType> {
    componentDidMount() {
        // @ts-ignore
        let userID = this.props.router.params.userID
        this.props.getProfileThunk(userID)
    }

    render() {
        return <Profile profileInfo={this.props.profileInfo}/>
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profileInfo: state.profilePage.profile,
    isAuth: state.auth.isAuthorized
})

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {setUserProfile, getProfileThunk}),
    withRouter)
(ContainerProfile)

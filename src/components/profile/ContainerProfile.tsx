import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getProfileThunk,
    getStatusThunk,
    ProfileType,
    setUserProfile,
    updateStatusThunk
} from "../../redux/profile-reducer";
import {withRouter} from "../Users/withRouter";
import {withAuthRedirect} from "../../hoc/wuthAuthRedirect";
import {compose} from "redux";

type mapStateToPropsType = {
    profileInfo: ProfileType | null
    isAuth: boolean
    status:string
    authUserID:number | null
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getProfileThunk: (userID: number) => void
    getStatusThunk:(userID:string)=> void
    updateStatusThunk:(status:string)=>void
}
type ContainerProfileType = mapStateToPropsType & mapDispatchToPropsType

class ContainerProfile extends React.Component<ContainerProfileType> {
    componentDidMount() {

        // @ts-ignore
        let userID = this.props.router.params.userID
        if (!userID){
            userID = this.props.authUserID
        }
        this.props.getProfileThunk(userID)
        this.props.getStatusThunk(userID)
    }

    render() {
        return <Profile updateStatus={this.props.updateStatusThunk} status={this.props.status} profileInfo={this.props.profileInfo}/>
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profileInfo: state.profilePage.profile,
    isAuth: state.auth.isAuthorized,
    status:state.profilePage.status,
    authUserID: state.auth.id
})

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {updateStatusThunk,setUserProfile, getProfileThunk,getStatusThunk}),
    withRouter)
(ContainerProfile)

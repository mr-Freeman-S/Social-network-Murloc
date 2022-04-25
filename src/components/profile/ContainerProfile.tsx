import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import axios from "axios";
import {withRouter} from "../Users/withRouter";
import {getProfile} from "../../api/api";

type mapStateToPropsType = {
    profileInfo: ProfileType | null
}
type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
type ContainerProfileType = mapStateToPropsType & mapDispatchToPropsType


class ContainerProfile extends React.Component<ContainerProfileType> {

    componentDidMount() {
        // @ts-ignore
        let userID = this.props.router.params.userID
        if (!userID) {
            userID = 23091
        }
        getProfile(userID).then(data => {
            this.props.setUserProfile(data)
        })

    }

    render() {
        return <Profile profileInfo={this.props.profileInfo}/>
    }
}

let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profileInfo: state.profilePage.profile
})


//example: one mdtp object drop in props
export default connect(mapStateToProps, {setUserProfile})(withRouter(ContainerProfile))

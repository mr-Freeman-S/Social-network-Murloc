import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    getProfileThunk,
    getStatusThunk,
    ProfileType, setPhotos,
    setUserProfile,
    updateStatusThunk
} from "../../redux/profileReducer/profile-reducer";
import {withRouter} from "../../hoc/withRouter";
import {withAuthRedirect} from "../../hoc/wuthAuthRedirect";
import {compose} from "redux";

export type userMapStateToPropsType = {
    profileInfo: ProfileType | null
    isAuth: boolean
    status: string
    authUserID: number | null
}
export type userMapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
    getProfileThunk: (userID: number) => void
    getStatusThunk: (userID: string) => void
    updateStatusThunk: (status: string) => void
    setPhotos: (photo: any) => void
}
type ContainerProfileType = userMapStateToPropsType & userMapDispatchToPropsType

class ContainerProfile extends React.Component<ContainerProfileType> {
    constructor(props:any) {
        super(props);
        this.state = {
            userID : props.router.params.userID
        }
    }
    componentDidMount() {
        // @ts-ignore
        let userID = this.props.router.params.userID

        this.props.getProfileThunk(userID)
        this.props.getStatusThunk(userID)
    }
    componentDidUpdate(prevProps: Readonly<ContainerProfileType>, prevState: Readonly<{}>, snapshot?: any) {
        // @ts-ignore
        if (prevProps.router.params.userID !== this.props.router.params.userID ){
            // @ts-ignore
            let userID = this.props.router.params.userID

            this.props.getProfileThunk(userID)
            this.props.getStatusThunk(userID)
        }
    }

    render() {
        return <Profile setPhotos={this.props.setPhotos} ownerId={this.props.authUserID} updateStatus={this.props.updateStatusThunk} status={this.props.status}
                        profileInfo={this.props.profileInfo}/>
    }
}

let mapStateToProps = (state: AppStateType): userMapStateToPropsType => ({
    profileInfo: state.profilePage.profile,
    isAuth: state.auth.isAuthorized,
    status: state.profilePage.status,
    authUserID: state.auth.id,
})

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {updateStatusThunk, setUserProfile, getProfileThunk, getStatusThunk, setPhotos}),
    withRouter)
(ContainerProfile)

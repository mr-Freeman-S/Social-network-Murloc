import profileReducer, {
    addNewPostAC,
    deletePostAC,
    initialProfileStateType, setStatus,
    setUserProfile
} from "./profile-reducer";
import {v1} from "uuid";

let state = <initialProfileStateType>{
    profile: null,
    postData: [
        {id: v1(), post: "Hi. My name is Slava", likeCount: 3},
        {id: v1(), post: "HI'm first Murlok here", likeCount: 5},
        {id: v1(), post: "Do you like Murlok?", likeCount: 999},
        {id: v1(), post: "i'm geek", likeCount: -1}
    ],
    status: ''
};

it('new post should be added', () => {
    //1.DATA
    let action = addNewPostAC('Hello world')

    //2.Action
    let newState = profileReducer(state, action)
    //3.Expect
    expect(newState.postData.length).toBe(5)
})
it('should delete post', () => {
    //1.DATA
    let action = deletePostAC(state.postData[0].id)
    //2.Action
    let newState = profileReducer(state, action)
    //3.Expect
    expect(newState.postData.length).toBe(3)
})
it('should be profile added', function () {
    //1.DATA
    const user = {
        "aboutMe": "i'm frontend developer",
        "contacts": {
            'dqwd': '',
            "facebook": '',
            "website": '',
            "vk": '',
            "twitter": '',
            "instagram": '',
            "youtube": '',
            "github": '',
            "mainLink": ''
        },
        "lookingForAJob": true,
        "lookingForAJobDescription": false,
        "fullName": 'Slava Baranok',
        "userId": 1,
        "photos": {
            "small": null,
            "large": null
        }
    }
    const action = setUserProfile(user)
    //2.Action
    const newState = profileReducer(state, action)
    //3.expect
    expect(newState.profile?.userId).toBe(1)
    expect(newState.profile?.fullName).toBe('Slava Baranok')
});

it('should status changed', function () {
    //1.DATA
    let action = setStatus('Hello world')
    //2.Action
    let newState = profileReducer(state, action)
    //3.Expect
    expect(newState.status).toBe('Hello world')
});

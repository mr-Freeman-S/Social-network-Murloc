import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCount,
    setUsers,
    toggleIsFollowing,
    toggleIsLoading,
    unfollowAC,
    userReducer,
    userType
} from "./user-reducer";

const user1 = <userType>{
    name: "slava",
    id: 1,
    uniqueUrlName: 'Slava B',
    photos: {
        small: null,
        large: null
    },
    status: 'Hello world',
    followed: false
}
const user2 = <userType>{
    name: "Kate",
    id: 2,
    uniqueUrlName: 'Kate L',
    photos: {
        small: null,
        large: null
    },
    status: 'Hello world',
    followed: true
}

const state = {
    users: [user1, user2],
    totalUsersCount: 2,
    pageSize: 10,
    currentPage: 1,
    isLoading: false,
    followIsProgress: []

}

it('should users be added', function () {
    //1.DATA
    const user = <userType>{
        name: "slava",
        id: 3,
        uniqueUrlName: 'Slava bartanok',
        photos: {
            small: null,
            large: null
        },
        status: 'Hello world',
        followed: false
    }
    //2.Action
    let action = setUsers([user, user, user])
    let newState = userReducer(state, action)
    //3.Expect
    expect(newState.users.length).toBe(3)
});
it('should followed user', function () {
    //2.Action
    let action = followAC(1)
    let newState = userReducer(state, action)
    //3.Expect
    expect(newState.users[0].followed).toBe(true)
});
it('should unfollowed user', function () {
    //2.Action
    const action = unfollowAC(2)
    const newState = userReducer(state, action)
    //3.Expect
    expect(newState.users[1].followed).toBe(false)
});
it('should be return total users count', function () {
    //2.Action
    const action = setTotalUsersCount(3)
    const newState = userReducer(state, action)
    //3.Expect
    expect(newState.totalUsersCount).toBe(3)
});
it('should be toggle is loading', function () {
    //2.Action
    const action = toggleIsLoading(true)
    const newState = userReducer(state, action)
    //3.Expect
    expect(newState.isLoading).toBe(true)
});
it('should toggle is progress', function () {
    //2.Action
    const action = toggleIsFollowing(2, true)
    const newState = userReducer(state, action)
    //3.Expect
    expect(newState.followIsProgress.length).toBe(1)
});
it('should change current page', function () {
    //2.Action
    const action = setCurrentPageAC(3)
    const newState = userReducer(state, action)
    //3.Expect
    expect(newState.currentPage).toBe(3)
});
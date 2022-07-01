import authReducer, {authInitialStateType, setAuthUserDataAC, setFetchingAC} from "../auth-reducer";

const state: authInitialStateType = {
    "id": null,
    "login": null,
    "email": null,
    isAuthorized: false,
    isFetching: true

}
it('should set user data', function () {
    //1.DATA
    let action = setAuthUserDataAC({id: 1, email: 'example@example.com', login: 'Slava'}, true)
    //2.Action
    let newState = authReducer(state, action)
    //3.Expect
    expect(newState.id).toBe(1)
    expect(newState.email).toBe('example@example.com')
    expect(newState.isAuthorized).toBeTruthy()
});
it('should change isFetching on false', function () {
    //1.DATA
    let action = setFetchingAC( false)
    //2.Action
    let newState = authReducer(state, action)
    //3.Expect

    expect(newState.isFetching).not.toBeTruthy()
});
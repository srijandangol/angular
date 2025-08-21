import { createReducer, on } from "@ngrx/store";
import { initialUserState, UserState } from "./user.state";
import * as UserActions from "./user.actions";

export const userReducer = createReducer(
    initialUserState,
    //login
    on(UserActions.login, (state): UserState => ({
        ...state,
        loading: true,
        error: null
    })),
    on(UserActions.loginSuccess, (state, {user}): UserState => ({
        ...state,
        user,
        loading: false
    })),
    on(UserActions.loginFailure, (state, {error}): UserState => ({
        ...state,
        error,
        loading: false
    })),


    //signup
    on(UserActions.signup, (state): UserState => ({
        ...state,
        loading: true,
        error: null
    })),
    on(UserActions.signupSuccess, (state, {user}): UserState => ({
        ...state,
        user,
        loading: false
    })),
    on(UserActions.signupFailure, (state, {error}): UserState => ({
        ...state,
        error,
        loading: false
    })),

    //logout
    on(UserActions.logout, ():UserState => initialUserState)

)
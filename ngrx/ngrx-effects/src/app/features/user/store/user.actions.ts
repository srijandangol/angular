import { createAction, props } from "@ngrx/store";
import { User } from "../models/user.model";


//Login
export const login = createAction (
    '[User] Login', props<{email: string; password:string}>()
)

export const loginSuccess = createAction(
    '[User] Login Success', props<{user:User}>()
)

export const loginFailure = createAction(
    '[User] Login Failure', props<{error:string}>()
)

//Sigup
export const signup = createAction (
    '[User] Signup', props<{email: string; password:string}>()
)

export const signupSuccess = createAction(
    '[User] Signup Success', props<{user:User}>()
)

export const signupFailure = createAction(
    '[User] Signup Failure', props<{error:string}>()
)

//LogOut
export const logout = createAction(
    '[User] Logout'
)

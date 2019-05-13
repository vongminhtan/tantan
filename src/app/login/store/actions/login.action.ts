import { Action } from '@ngrx/store';

import { AuthToken, UserProfile, LoginModel } from '../../models';




export const LOGIN = '[LOGIN] Login';
export const LOGIN_FAIL = '[LOGIN] Login Fail';
export const LOGIN_SUCCESS = '[LOGIN] Login Success';

export const GET_LOGGED_IN_USER = '[GET_LOGGED_IN_USER] Get Logged In User';
export const GET_LOGGED_IN_USER_FAIL = '[GET_LOGGED_IN_USER_FAIL] Get Logged In User Fail';
export const GET_LOGGED_IN_USER_SUCCESS = '[GET_LOGGED_IN_USER_SUCCESS] Get Logged In User Success';

export class Login implements Action {
    readonly type = LOGIN;
    constructor(public payload: LoginModel) { }
}

export class LoginFail implements Action {
    readonly type = LOGIN_FAIL;
    constructor(public payload: any) { }
}

export class LoginSuccess implements Action {
    readonly type = LOGIN_SUCCESS;
    constructor(public payload: AuthToken) { }

}

export class GetLoggedInUser implements Action {
    readonly type = GET_LOGGED_IN_USER;
}

export class GetLoggedInUserFail implements Action {
    readonly type = GET_LOGGED_IN_USER_FAIL;
    constructor(public payload: any) { }
}

export class GetLoggedInUserSuccess implements Action {
    readonly type = GET_LOGGED_IN_USER_SUCCESS;
    constructor(public payload: UserProfile) { }
}

export type LoginActions = Login | LoginFail | LoginSuccess | GetLoggedInUser | GetLoggedInUserFail | GetLoggedInUserSuccess;

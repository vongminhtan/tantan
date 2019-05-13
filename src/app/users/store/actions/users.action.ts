import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserInfo } from '../../models';
import { Update } from '@ngrx/entity';


export const GET_ALL_USERS = '[User] Get All User';
export const GET_ALL_USERS_SUCCESS = '[User] Get All User Success';
export const GET_ALL_USERS_FAIL = '[User] Get All User Fail';

export const UPDATE_USER = '[User] Update User';
export const UPDATE_USER_SUCCESS = '[User] Update User Success';
export const UPDATE_USER_FAIL = '[User] Update User Fail';

export const DELETE_USER = '[User] Delete User';
export const DELETE_USER_SUCCESS = '[User] Delete User Success';
export const DELETE_USER_FAIL = '[User] Delete User Fail';

export const ADD_USER = '[User] Add User';
export const ADD_USER_SUCCESS = '[User] Add User Success';
export const ADD_USER_FAIL = '[User] Add User Fail';

export const UPDATE_PAGE = '[User] Update Page';

export class GetAllUsers implements Action {
    readonly type = GET_ALL_USERS;
}

export class GetAllUsersSuccess implements Action {
    readonly type = GET_ALL_USERS_SUCCESS;
    constructor(public payload: {data: Array<UserInfo>, paging: any}) { }
}

export class GetAllUsersFail implements Action {
    readonly type = GET_ALL_USERS_FAIL;
    constructor(public payload: any) { }
}

export class UpdateUser implements Action {
    readonly type = UPDATE_USER;
    constructor(public payload: UserInfo) { }
}

export class UpdateUserSuccess implements Action {
    readonly type = UPDATE_USER_SUCCESS;
    constructor(
        public payload: { id: number, user: Partial<UserInfo> }
    ) { }
}

export class UpdateUserFail implements Action {
    readonly type = UPDATE_USER_FAIL;
    constructor(public payload: any) { }
}

export class DeleteUser implements Action {
    readonly type = DELETE_USER;
    constructor(public payload: number) { }
}

export class DeleteUserSuccess implements Action {
    readonly type = DELETE_USER_SUCCESS;
    constructor(public payload: number) { }
}

export class DeleteUserFail implements Action {
    readonly type = DELETE_USER_FAIL;
    constructor(public payload: any) { }
}

export class AddUser implements Action {
    readonly type = ADD_USER;
    constructor(public payload: UserInfo) { }
}

export class AddUserSuccess implements Action {
    readonly type = ADD_USER_SUCCESS;
    constructor(public payload: UserInfo) { }
}

export class AddUserFail implements Action {
    readonly type = ADD_USER_FAIL;
    constructor(public payload: any) { }
}

export class UpdatePage implements Action {
    readonly type = UPDATE_PAGE;
    constructor(public payload: { page: number }) { }
}

export type UsersAction =
    GetAllUsers | GetAllUsersSuccess | GetAllUsersFail
    | UpdateUser | UpdateUserSuccess | UpdateUserFail
    | DeleteUser | DeleteUserSuccess | DeleteUserFail
    | AddUser | AddUserSuccess | AddUserFail
    | UpdatePage;

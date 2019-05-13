import * as fromLogin from '../actions/login.action';
import { LoginModel, AuthToken, UserProfile } from '../../models';


export interface LoginState {
    token: AuthToken;
    loggedInUser: UserProfile;
    loaded: boolean;
    loading: boolean;
}

export const initialState: LoginState = {
    token: undefined,
    loggedInUser: undefined,
    loaded: false,
    loading: false,
};

export function reducer(state = initialState, action: fromLogin.LoginActions): LoginState {

    switch (action.type) {
        case fromLogin.LOGIN: {
            return {
                ...state,
                loading: true,
            };
        }
        case fromLogin.LOGIN_SUCCESS: {
            const data = action.payload;
            return {
                ...state,
                loading: false,
                loaded: true,
                token: data,
            };
        }
        case fromLogin.LOGIN_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false,
            };
        }
        case fromLogin.GET_LOGGED_IN_USER: {
            return {
                ...state,
                loading: true,
            };
        }
        case fromLogin.GET_LOGGED_IN_USER_SUCCESS: {
            const data = action.payload;
            return {
                ...state,
                loading: false,
                loaded: true,
                loggedInUser: data,
            };
        }
        case fromLogin.GET_LOGGED_IN_USER_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: true,
            };
        }
        default: {
            return state;
        }
    }

}

export const getLoginLoading = (state: LoginState) => state.loading;

export const getLoginLoaded = (state: LoginState) => state.loaded;

export const getToken = (state: LoginState) => state.token;

export const getLoggedInUser = (state: LoginState) => state.loggedInUser;

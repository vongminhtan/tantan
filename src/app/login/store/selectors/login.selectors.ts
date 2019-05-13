import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromLogin from '../reducers/login.reducer';
import { AuthToken } from '../../models';

export const selectLoginState = createFeatureSelector<fromLogin.LoginState>('login');

export const selectLoggedInUser = createSelector(
    selectLoginState,
    fromLogin.getLoggedInUser,
);

export const selectToken = createSelector(
    selectLoginState,
    fromLogin.getToken,
);

export const selectPendding = createSelector(
    selectLoginState,
    fromLogin.getLoginLoading,
);

export const selectIsAuthenticated = createSelector(
    selectToken,
    ((token: AuthToken): boolean => {
        if (!token || !token.accessToken) {
            return false;
        }
        return true;
    })
);

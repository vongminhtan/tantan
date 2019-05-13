import * as fromUser from './users.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export const featureName = 'Users';

export interface UserState {
    users: fromUser.UserState;
}

export const reducers: ActionReducerMap<UserState> = {
    users: fromUser.reducer,
};

export const getFeatureState = createFeatureSelector<UserState>(featureName);

export const getUserState = createSelector(
    getFeatureState,
    state => state.users
);


import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromLogin from './login.reducer';



export interface ProductsState {
    login: fromLogin.LoginState;
}


export const reducers: ActionReducerMap<ProductsState> = {
    login : fromLogin.reducer
}


export const getProductsState = createFeatureSelector<ProductsState>(
    'products');


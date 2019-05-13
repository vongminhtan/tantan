import { UserInfo, Paging } from '../../models';
import * as fromUser from '../actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { State } from '@ngrx/store';
import { from } from 'rxjs';

export interface UserState extends EntityState<UserInfo> {
  loading: boolean;
  loaded: boolean;
  paging: Paging;
}

export const adapter: EntityAdapter<UserInfo> = createEntityAdapter<UserInfo>();

export const initialState: UserState = adapter.getInitialState({
  loading: false,
  loaded: false,
  paging: {
    total: null,
    totalPage: null,
    limit: 2,
    page: 1
  }
});



export function reducer(state = initialState, action: fromUser.UsersAction): UserState {
  switch (action.type) {
    case fromUser.GET_ALL_USERS: {

      return {
        ...state,
        loading: true
      };
    }

    case fromUser.GET_ALL_USERS_SUCCESS: {
      return adapter.upsertMany(action.payload.data, {
        ...state,
        loading: false,
        loaded: true,
        paging: action.payload.paging,
      });
    }

    case fromUser.GET_ALL_USERS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }

    case fromUser.UPDATE_USER: {
      return {
        ...state,
        loading: true
      };
    }

    case fromUser.UPDATE_USER_SUCCESS: {
      return adapter.updateOne({
        id: action.payload.id,
        changes: action.payload
      }, {
          ...state,
          loading: false,
          loaded: true,
        });
    }

    case fromUser.UPDATE_USER_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }

    case fromUser.DELETE_USER: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromUser.DELETE_USER_SUCCESS: {
      return adapter.removeOne(action.payload, {
        ...state,
        loading: false,
        loaded: true,
      });
    }

    case fromUser.DELETE_USER_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }

    case fromUser.ADD_USER: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromUser.ADD_USER_SUCCESS: {
      return adapter.addOne(action.payload, {
        ...state,
        loading: false,
        loaded: true,
      });
    }

    case fromUser.ADD_USER_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: true
      };
    }

    case fromUser.UPDATE_PAGE: {
      const paging = {
        ...state.paging,
        page: action.payload.page
      }
      return {
        ...state,
        paging,
      };
    }

    // default
    default: {
      return state;
    }


  }
}

export const getUserLoading = (state: UserState) => state.loading;
export const getUserLoaded = (state: UserState) => state.loaded;
export const getUserPaging = (state: UserState) => state.paging;





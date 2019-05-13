import { createSelector } from '@ngrx/store';

import * as fromUser from '../reducers/users.reducer';
import * as fromFeature from '../reducers';


export const {
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectTotalUsers,
} = fromUser.adapter.getSelectors(fromFeature.getUserState);


export const selectUserLoading = createSelector(
  fromFeature.getUserState,
  fromUser.getUserLoading,
);

export const selectUserLoaded = createSelector(
  fromFeature.getUserState,
  fromUser.getUserLoaded,
);


export const selectUserPaging = createSelector(
  fromFeature.getUserState,
  fromUser.getUserPaging,
);

export const selectUserForUserPaging = createSelector(
  selectAllUsers,
  selectUserPaging,
  (users: any, paging) => {
    return users.filter(user => user.page === paging.page);
  }
);

export const selectUserUserPaging = (pageNumber: number) => createSelector(
  selectAllUsers,
  selectUserPaging,
  (users, paging) => {
    if (!users || !paging || !pageNumber) {
      return [];
    }

    const result = users.slice(pageNumber * paging.limit - paging.limit, pageNumber * paging.limit - 1);

    return result;
  }
);




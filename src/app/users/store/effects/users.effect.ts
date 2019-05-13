import { Injectable } from '@angular/core';
import { UsersService } from '../../services';
import { Actions } from '@ngrx/effects';
import { Effect, ofType } from '@ngrx/effects';
import * as fromAction from '../actions/users.action';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserInfo } from '../../models';
import { selectUserForUserPaging, selectUserPaging } from '../selectors';


@Injectable()

export class UserEffect {
  constructor(
    private userService: UsersService,
    private action$: Actions,
    private store: Store<UserInfo>,
  ) { }



  @Effect()
  user$ = this.action$.pipe(
    ofType(fromAction.GET_ALL_USERS),
    withLatestFrom(this.store.select(selectUserPaging)),
    switchMap(([ , paging]) => {
      return this.userService.getUsersByPage(paging.page).pipe(
        map(users => {
          const pagingMock = {
            total: 8,
            totalPage: 4,
            limit: 2,
            page: paging.page,
          };
// tslint:disable-next-line: no-shadowed-variable
          users  = users.map(users => {
            return {
              ...users,
              page: paging.page,
            };
          });

          const result = {
            data : users,
            paging: pagingMock
          };

          return new fromAction.GetAllUsersSuccess(result);
        }),
        catchError(error => of(new fromAction.GetAllUsersFail(error)))
      );
    })
  );

  @Effect()
  update$ = this.action$.pipe(
    ofType(fromAction.UPDATE_USER),
    map((action: fromAction.UpdateUser) => action.payload),
    switchMap((payload) => {
      return this.userService.updateUser(payload.id, payload).pipe(
        map(res => {
          return new fromAction.UpdateUserSuccess({ id: res.id, user: res });
        }),
        catchError(err => of(new fromAction.UpdateUserFail(err)))
      );
    })
  );

  @Effect()
  delete$ = this.action$.pipe(
    ofType(fromAction.DELETE_USER),
    map((action: fromAction.DeleteUser) => action.payload),
    switchMap((payload) => {
      return this.userService.deleteUser(payload).pipe(
        map((res) => new fromAction.DeleteUserSuccess(payload)),
        catchError(err => of(new fromAction.DeleteUserFail(err))),
      );
    })
  );

  @Effect()
  add$ = this.action$.pipe(
    ofType(fromAction.ADD_USER),
    map((action: fromAction.AddUser) => action.payload),
    switchMap((payload) => {
      return this.userService.addUserInfo(payload).pipe(
        map(res => {
          return new fromAction.AddUserSuccess(res);
        }),
        catchError(err => of(new fromAction.AddUserFail(err)))
      );
    })
  );
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as LoginActions from '../actions/login.action';
import * as fromServices from '../../services';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable()
export class LoginEffects {
  constructor(
    private action$: Actions,
    private loginService: fromServices.LoginService,
    private route: Router,
    private authService: AuthService,
  ) { }

  @Effect()
  Login$ = this.action$.pipe(
    ofType(LoginActions.LOGIN),
    map((action: any) => action.payload),
    switchMap(payload => {
      return this.loginService.login(payload).pipe(
        map(res => {
          this.route.navigate(['users']);
          this.authService.saveToken(res.accessToken);

          console.log('login success: ', res);
          return new LoginActions.LoginSuccess(res);
        }),
        catchError(err => of(new LoginActions.LoginFail(err)))

      );
    })
  );

  @Effect()
  LoginSuccess$ = this.action$.pipe(
    ofType(LoginActions.LOGIN_SUCCESS),
    switchMap(() => {
      return this.loginService.getLoggedInUser().pipe(
        map(res => {
          return new LoginActions.GetLoggedInUserSuccess(res);
        }),
        catchError(err => of(new LoginActions.GetLoggedInUserFail(err)))
      );
    }
    )
  );
}

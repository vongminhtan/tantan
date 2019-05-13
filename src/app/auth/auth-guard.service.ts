import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { Store, select } from '@ngrx/store';
import { LoginState } from '../login/store/reducers/login.reducer';
import { Observable } from 'rxjs';
import { tap, take } from 'rxjs/operators';
import { selectIsAuthenticated } from '../login/store/selectors';

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router,
    private store: Store<LoginState>
  ) { }

  // canActivate(): Observable<boolean> {
  //   return this.store.pipe(
  //     select(selectIsAuthenticated),
  //     tap((loggedIn) => {
  //       if (!loggedIn) {
  //         console.log('canActive success!')
  //         this.router.navigate(['login'])
  //       }

  //     }),
  //     take(1)
  //   );
  // }


  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['users']);
      return false;
    }
    return true;
  }
}

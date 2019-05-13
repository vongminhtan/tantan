import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginModel, UserProfile } from '../../models';
import { LoginService } from '../../services';
import { AuthService } from 'src/app/auth/auth.service';
import { Store, select } from '@ngrx/store';
import { LoginState } from '../../store/reducers/login.reducer';
import * as fromStore from '../../store';
import { Observable } from 'rxjs';
import { selectPendding, selectLoggedInUser,  } from '../../store/selectors';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  isPending = false;
  message = '';
  user$: Observable<UserProfile>;
  isPending$: Observable<boolean>;

  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private router: Router,
    private store: Store<LoginState>
  ) {
    this.isPending$ = this.store.pipe(select(selectPendding));

    this.isPending$.subscribe(x => console.log('pendding: ', x));

    this.user$ = this.store.select(selectLoggedInUser);
   }

  ngOnInit() {
  }

  onSubmitAction() {
    const user: LoginModel = {
      username: 'admin@demo.com',
      password: 'demo!23'
    };
    this.store.dispatch(new fromStore.Login(user));
  }

  onSubmit(user: LoginModel) {
    this.isPending = true;
    this.message = '';
    this.loginService.login(user)
      .subscribe(
        (res) => {
          this.router.navigate(['/dashboard']);
          this.isPending = false;
          this.authService.saveToken(res.accessToken);
        },
        (err) => {
          this.message = err.error.message;
          this.isPending = false;
        }
      );

    // this.store.dispatch(new fromStore.Login(user));
  }

}

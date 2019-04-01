import { Injectable } from '@angular/core';

import { AuthService } from './auth.service'
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UnLogInGuardService implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  canActivate(): boolean {

    if(this.auth.isHasToken()){
      return true
    }
    else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class LoginedGuardService implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,

  ) { }
  canActivate(): boolean {
    if (this.auth.isHasToken()) {
      this.router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Credential } from './credential';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
  ) { }

  login(user:any): Observable<any>{
    const url = 'https://eztek-json-db.herokuapp.com/auth/login';
    return this.http.post(url, user);
  }

  getAuthorizationToken(){
    return localStorage.getItem('key');
  }


  isHasToken(){
    const token = localStorage.getItem('key');
    if(token){
      return true;
    }     
    else{
      return false;
    }
      
  }

  saveToken(token){
    localStorage.setItem('key', token)
  }

  
}

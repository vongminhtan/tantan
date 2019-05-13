import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LoginModel } from '../models';



@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {

  }

  login(user: LoginModel): Observable<any> {
    const url = 'https://eztek-json-db.herokuapp.com/auth/login';
    return this.http.post(url, user);
  }

  getLoggedInUser(): Observable<any> {
    const headers = new HttpHeaders({ Authorization: `Bearer 123` });
    return this.http.get('https://eztek-json-db.herokuapp.com/api/profile', {
      headers: headers
    });
  }
}

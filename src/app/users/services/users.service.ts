import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserInfo } from '../models';
import { environment } from 'src/environments/environment';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Array<UserInfo>> {
    return this.http.get<Array<UserInfo>>(environment.baseUrl);
  } 

  getUsersByPage(page = 1): Observable<Array<UserInfo>> {
    let params = new HttpParams();
    params = params.append('_page', page.toString());
    params = params.append('_limit', '2');
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.get<Array<UserInfo>>(`https://eztek-json-db.herokuapp.com/api/users` , {
      headers,
      params
    });
  }

  getUserById(id: number): Observable<UserInfo> {
    return this.http.get<UserInfo>(environment.baseUrl + id);
  }

  updateUser(id: number, user: UserInfo): Observable<UserInfo> {   
    return this.http.put<UserInfo>(environment.baseUrl+ id,user)
  }

  deleteUser(id: number) {
    return this.http.delete<UserInfo>(environment.baseUrl+ id)
  }

  addUserInfo(user: UserInfo) {
    return this.http.post<UserInfo>(environment.baseUrl,user);
  }
}

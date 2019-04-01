import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(
    private http: HttpClient

  ) { }

  getUsers(): Observable<any> {
    return this.http.get(environment.baseUrl);
  }

  getUserById(id:number): Observable<User>{
    return this.http.get<User>(environment.baseUrl+ id); 
  } 

  updateUsers(user:User, id: number): Observable<User>{  
    return this.http.put<User>(environment.baseUrl+ id,user)
  }

  deleteUser(id: number){
    return this.http.delete<User>(environment.baseUrl+ id)
  }

  addUser(user: User){
    return this.http.post<User>(environment.baseUrl,user);
  }
}

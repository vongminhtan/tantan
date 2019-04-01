import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { UsersService } from '../users.service';
import { User } from '../user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<User>;
  constructor(
    private usersService: UsersService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.usersService.getUsers().subscribe(
      (res) => {
      this.users$ = res;
      console.log(this.users$);
    }, 
    (err) => {
      console.log('err', err);
    })
  }

  onBtnDeleteClicked(id: number){
     this.usersService.deleteUser(id).subscribe((res)=>{
       console.log(res);
       location.reload();
     });
  }

  onBtnAddUserClicked(){
    this.router.navigate(['/add']);
  }
}

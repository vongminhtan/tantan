import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(
    private location: Location,
    private http: HttpClient,
    private userService: UsersService,
  ) { }

  ngOnInit() {
  }

  onBtnGoBackCliked(): void {
    this.location.back();
  }

  isFinished = false;
  user: User;
  onBtnAddCliked(): void{
     this.userService.addUser(this.user);
     this.isFinished = true;
  }

}

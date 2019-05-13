import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserInfo } from '../../models';
import { UsersService } from '../../services';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  newUser: UserInfo = {
    id: this.generateId(),
    userName: '',
    email: '',
    firstName: '',
    lastName: '',
    isActive: false,
    lastUpdated: 0
  };
  isSuccess = false;
  isPending = false;
  isFormClicked = true;

  constructor(private usersService: UsersService,
    private route: Router,
    private store: Store<UserInfo>,
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    const lastupdated = new Date();
    this.newUser.lastUpdated = Number(lastupdated);
    this.isPending = true;
    this.store.dispatch(new fromStore.AddUser(this.newUser));
    this.isPending = false;
    this.isSuccess = true;

    this.isFormClicked = false;
    this.route.navigate(['/users']);
  }

  onActiveCheckBoxClicked() {
    this.newUser.isActive = true;
  }

  onFormClicked() {
    this.isFormClicked = true;
  }

  generateId() {
    return Math.floor(Math.random() * 1000000000);
  }
}

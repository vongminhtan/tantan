import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserInfo } from '../../models';
import { UsersService } from '../../services';
import { UpdateUser } from '../../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: UserInfo;
  updatedUser: UserInfo;
  isSuccess = false;
  isPending = false;
  isFormClicked = true;

  constructor(private route: ActivatedRoute,
    private usersService: UsersService,
    private store: Store<UserInfo>,
  ) { }

  ngOnInit() {
    this.getUserById();
  }

  getUserById() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usersService.getUserById(id).subscribe(user => {
      this.user = user;
    });
  }

  onSubmit() {
    const lastupdated = new Date();
    this.user.lastUpdated = Number(lastupdated);
    this.isPending = true;
    this.store.dispatch(new UpdateUser(this.user));
    this.isPending = false;
    this.isSuccess = true;
    this.isFormClicked = false;
  }

  onActiveCheckBoxClicked() {
    this.user.isActive = !this.user.isActive;
  }

  onFormClicked() {
    this.isFormClicked = true;
  }

}

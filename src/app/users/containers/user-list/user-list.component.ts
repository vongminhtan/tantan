import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { UserInfo } from '../../models';
import { UsersService } from '../../services';
import { UserState } from '../../store/reducers';
import { GetAllUsers } from '../../store/actions';
import * as fromStore from '../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(
    private usersService: UsersService,
    private route: Router,
    private store: Store<UserState>,
  ) {

  }
  users = [];
  isLoading = true;
  finishLoading = false;

  p = 1;
  collection: any[] = this.users;

  total: number;

  ngOnInit() {
    this.store.dispatch(new GetAllUsers);

    this.store.select(fromStore.selectAllUsers).subscribe(users => {
      this.users = users;
    });

    this.store.select(fromStore.selectUserLoading).subscribe(loading => {
      this.isLoading = loading;
    });

    this.store.select(fromStore.selectUserLoaded).subscribe(loaded => {
      this.finishLoading = loaded;
    });

  }

  changeUserPageNumber(page: number) {
    this.store.dispatch(new fromStore.UpdatePage({ page }));

    this.store.dispatch(new fromStore.GetAllUsers());
    this.store.select(fromStore.selectUserUserPaging(page));
  }

  deleteUser(user: UserInfo) {
    if (confirm(`Are you sure to delete user ${user.userName} `)) {
      this.store.dispatch(new fromStore.DeleteUser(user.id));
    }
  }


}

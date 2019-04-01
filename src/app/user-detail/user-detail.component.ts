import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../user';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User;
  isSaveBtnClicked = false;
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private location: Location,
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.userService.getUserById(id).subscribe(user => {
      this.user = user;
    });
  }

  onBtnGoBackCliked(): void {
    this.location.back();
  }

  onBtnAactive(){
    this.user.isActive = !this.user.isActive;
  }

  onBtnSaveCliked() {
    this.user.lastUpdated = Number(new Date());
    this.userService.updateUsers(this.user, this.user.id).subscribe((res) => {
      this.isSaveBtnClicked = true;
    });
  }
}

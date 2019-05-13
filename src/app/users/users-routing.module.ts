import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: '',
    component: fromContainers.UserListComponent
  },
  {
    path: 'add',
    pathMatch: 'full',
    component: fromContainers.AddUserComponent
  },
  {
    path: ':id',
    component: fromContainers.UserDetailsComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

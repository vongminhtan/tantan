import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnLogInGuardService, LoginedGuardService} from './guard.service'
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path:'login', component: LoginComponent , canActivate:[LoginedGuardService]},
  {path:'dashboard', component: DashboardComponent, canActivate:[UnLogInGuardService]},
  {path:'users', component: UsersComponent,},
  {path:'users/:id', component: UserDetailComponent},
  {path:'add', component: AddUserComponent},
];  

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

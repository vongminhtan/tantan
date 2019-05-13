import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LoginGuardService as UnAuthorizedGuard, AuthGuardService } from './auth/auth-guard.service';
import { DashboardComponent } from './core/containers';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'users',
        loadChildren: './users/users.module#UsersModule',
        canActivate: [AuthGuardService]
      }
    ]
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    canActivate: [UnAuthorizedGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

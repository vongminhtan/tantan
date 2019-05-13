import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { components } from './components';
import { containers } from './containers';
import { services } from './services';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { effects, reducers } from './store';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    StoreModule.forFeature('login', reducers),
    EffectsModule.forFeature(effects),
  ],
  declarations: [
    ...components,
    ...containers
  ],
  providers: [
    ...services
  ]
})
export class LoginModule { }

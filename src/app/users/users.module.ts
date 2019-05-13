import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { UsersRoutingModule } from './users-routing.module';
import { SERVICES } from './services';
import { CONTAINERS } from './containers';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromStore from './store';
import { MatProgressBarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    NgxPaginationModule,
    MatProgressBarModule,

    StoreModule.forFeature(fromStore.featureName, fromStore.reducers),
    EffectsModule.forFeature([...fromStore.effects]),
  ],
  declarations: [
    ...CONTAINERS
  ],
  providers: [
    ...SERVICES
  ]
})
export class UsersModule { }

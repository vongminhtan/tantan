import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { containers } from './containers';
import { components } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,

    NgbDropdownModule

  ],
  exports: [
  ],
  declarations: [
    ...containers,
    ...components
  ]
})
export class CoreModule { }

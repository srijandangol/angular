import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomepageRoutingModule } from './homepage-routing-module';
import { HomepageComponent } from './homepage';
import { HeaderModule } from '../header/header-module';

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomepageRoutingModule,
    HeaderModule
  ]
})
export class HomepageModule { }

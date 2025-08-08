import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing-module';
import { HeaderComponent } from './header';
import { FormsModule } from '@angular/forms';
import { CartComponent } from '../cart/cart';


@NgModule({
  declarations: [
    HeaderComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeaderRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

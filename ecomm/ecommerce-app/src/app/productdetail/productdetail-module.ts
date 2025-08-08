import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductdetailRoutingModule } from './productdetail-routing-module';
import { ProductDetailComponent } from './productdetail';


@NgModule({
  declarations: [
    // ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductdetailRoutingModule
  ]
})
export class ProductdetailModule { }

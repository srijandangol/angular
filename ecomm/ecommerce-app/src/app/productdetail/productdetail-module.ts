import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductdetailRoutingModule } from './productdetail-routing-module';
import { ProductDetailComponent } from './productdetail';

@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductdetailRoutingModule
  ]
})
export class ProductdetailModule { }

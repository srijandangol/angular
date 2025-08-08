import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing-module';
import { ProductComponent } from './product';
import { ProductDetailComponent } from '../productdetail/productdetail';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
  ],
  
})
export class ProductModule { }

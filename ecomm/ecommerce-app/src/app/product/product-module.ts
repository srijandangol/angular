import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing-module';
import { ProductComponent } from './product';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductRoutingModule,
  ],
  
})
export class ProductModule { }

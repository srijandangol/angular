import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing-module';
import { AdminComponent } from './admin';
import { ManageProductsComponent } from './manage-products/manage-products';

@NgModule({
  declarations: [
    AdminComponent,
    ManageProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

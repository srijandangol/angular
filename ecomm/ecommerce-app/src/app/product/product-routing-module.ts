import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product';
import { ProductDetailComponent } from '../productdetail/productdetail';

const routes: Routes = [
  { path: '', component: ProductComponent },
   {path: ':id', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

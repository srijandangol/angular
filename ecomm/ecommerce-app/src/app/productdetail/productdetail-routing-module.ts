import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './productdetail';

const routes: Routes = [       // List all products
  // { path: 'product/:id', component: ProductDetailComponent }  // Product detail by ID
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductdetailRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin';
import { AddProductComponent } from './add-product/add-product';
import { UpdateProductComponent } from './update-product/update-product';

const routes: Routes = [
  {
    path: 'update-product/:id',
    component: UpdateProductComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
  {
    path: '',
    component: AdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

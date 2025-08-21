import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './features/user/guards/auth-guard'; // Import your guard

const routes: Routes = [
  {
    // Root path - loads product catalog
    path: '',
    loadChildren: () =>
      import('./features/products/components/product-module')
        .then(m => m.ProductModule)
  },
  {
    // Cart path - protected by AuthGuard
    path: 'cart',
    loadChildren: () =>
      import('./features/cart/components/cart-module')
        .then(m => m.CartModule),
    canActivate: [AuthGuard] // <-- Add guard here
  },
  {
    // User authentication routes (login/signup)
    path: 'user',
    loadChildren: () =>
      import('./features/user/user-module')
        .then(m => m.UserModule)
  },
  {
    path: '**', // Wildcard route for 404
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

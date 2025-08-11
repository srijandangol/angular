import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth/auth-guard';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutes } from './constant/route.constant';
import { CartComponent } from './cart/cart';
import { CartGuard } from './guard/cart/cart-guard';

const routes: Routes = [
  
  { path: AppRoutes.HOME, loadChildren: () => import('./homepage/homepage-module').then(m => m.HomepageModule) },
  { path: AppRoutes.LOGIN, loadChildren: () => import('./login/login-module').then(m => m.LoginModule) },
  { path: AppRoutes.SIGNUP, loadChildren: () => import('./signup/signup-module').then(m => m.SignupModule) },
  // { path: AppRoutes.NAVIGATION, component: NavigationComponent, canActivate: [AuthGuard] },
  { path: AppRoutes.PRODUCT, loadChildren: () => import('./product/product-module').then(m => m.ProductModule) },
  { path: AppRoutes.CART,  component: CartComponent,  canActivate: [CartGuard]},
  { path: '**', redirectTo: AppRoutes.LOGIN }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

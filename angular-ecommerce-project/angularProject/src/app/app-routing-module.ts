import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Homepage } from './components/homepage/homepage';
import { Login } from './components/login/component/login';
import { Signup } from './components/signup/component/signup';
import { DashboardComponent } from './components/schematic/dashboard/dashboard.component';
import { AuthGuard } from './components/guard/auth-guard';
import { NavigationComponent } from './components/schematic/navigation/navigation.component';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'login', component: Login },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'navigation', component: NavigationComponent, canActivate: [AuthGuard] },
  { path: 'signup', component: Signup },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

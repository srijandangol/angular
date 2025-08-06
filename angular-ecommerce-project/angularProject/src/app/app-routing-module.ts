import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Homepage } from './components/homepage/homepage';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';

export const routes: Routes = [
  { path: '', component: Homepage },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

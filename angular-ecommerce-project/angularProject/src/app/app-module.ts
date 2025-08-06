import { NgModule, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routes } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { Homepage } from './components/homepage/homepage';
import { provideRouter } from '@angular/router';

@NgModule({
  declarations: [
    App,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,Login,
    Signup,Header,
    
    Homepage
    
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ],
  bootstrap: [App]
})
export class AppModule { }

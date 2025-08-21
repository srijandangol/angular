import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productReducer } from './features/products/store/product.reducer';
import { ProductEffects } from './features/products/store/product.effects';
import { cartReducer } from './features/cart/store/cart.reducer';
import { CartEffects } from './features/cart/store/cart.effects';
import { SharedModule } from './shared/shared.module';
import { userReducer } from './features/user/store/user.reducer';
import { UserEffects } from './features/user/store/user.effects';

/**
 * App Module - Root module of the Angular application
 * Configures NgRx store with feature reducers and effects
 * Sets up core application dependencies and routing
 */
@NgModule({
  declarations: [
    // Root app component
    App
  ],
  imports: [
    // Core Angular modules
    BrowserModule,
    BrowserAnimationsModule, // Required for Material Design animations
    HttpClientModule, // Required for HTTP services (ProductService)
    SharedModule, // Shared components like HeaderComponent
    AppRoutingModule, // Application routing configuration
    
    // NgRx Store configuration with feature reducers
    StoreModule.forRoot({ 
      products: productReducer, // Product feature state
      cart: cartReducer, // Cart feature state
      user: userReducer
    }),
    
    // NgRx Effects registration for async operations
    EffectsModule.forRoot([ProductEffects, CartEffects, UserEffects])
  ],
  providers: [
    // Global error handling
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App] // Root component to bootstrap
})
export class AppModule { }

import { Component, inject, signal, OnInit } from '@angular/core';
import { ProductService } from './service/product/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrls: ['./app.scss'] // ✅ fixed name and format
})
export class App {
  protected readonly title = signal('🛍️ ShopHub - ecommerce-app');
  productService = inject(ProductService);

  OnInit() {
    const localData = localStorage.getItem('products');
    if (!localData) {
      this.productService.loadProductsFromJsonToLocalStorage().subscribe({
        next: (products) => {
          console.log('Products loaded from JSON:', products);
        },
        error: (error) => {
          console.error('Error loading products:', error);
        }
      });   
    } else {
      console.log('Products already exist in local storage.');
    }
  }
}

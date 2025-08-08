import { Injectable } from '@angular/core';
import { Product } from '../../models/product-model'; // adjust this path

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartKey = 'cart';

  getCartItems(): Product[] {
    return JSON.parse(localStorage.getItem(this.cartKey) || '[]');
  }

  addToCart(product: Product): void {
    const currentCart = this.getCartItems();
    currentCart.push(product);
    localStorage.setItem(this.cartKey, JSON.stringify(currentCart));
  }

  removeItem(index: number): void {
    const currentCart = this.getCartItems();
    currentCart.splice(index, 1);
    localStorage.setItem(this.cartKey, JSON.stringify(currentCart));
  }

  clearCart(): void {
    localStorage.removeItem(this.cartKey);
  }
}

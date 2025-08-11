import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  addItem(product: Product) {
    throw new Error('Method not implemented.');
  }
  
  private cartKey = 'cart';
  private cart: Product[] = JSON.parse(localStorage.getItem(this.cartKey) || '[]');

  // BehaviorSubject to hold and broadcast cart count
  private cartCountSubject = new BehaviorSubject<number>(this.cart.length);
  cartCount$ = this.cartCountSubject.asObservable(); // Expose as observable

  constructor() {}

  private updateCartCount(): void {
    this.cartCountSubject.next(this.cart.length);
  }

  isLoggedIn(): boolean {
    // Example: check if a token exists in localStorage
    return !!localStorage.getItem('authToken');
  }
  getCartItems(): Product[] {
    return [...this.cart]; // Return a shallow copy
  }

  addToCart(product: Product): void {
    this.cart.push(product);
    this.saveCart();
  }

  removeItem(index: number): void {
    this.cart.splice(index, 1);
    this.saveCart();
  }

  removeItemById(id: number): void {
    this.cart = this.cart.filter(item => item.id !== id);
    this.saveCart();
  }

  removeSelectedItems(selectedIds: number[]): void {
    this.cart = this.cart.filter(item => !selectedIds.includes(item.id));
    this.saveCart();
  }

  clearCart(): void {
    this.cart = [];
    this.saveCart();
  }

  private saveCart(): void {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
    this.updateCartCount(); // 🔁 Ensure count is updated every time cart is saved
  }
}

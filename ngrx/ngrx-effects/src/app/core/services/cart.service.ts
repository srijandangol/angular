import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CartItem } from '../models/cart.model';
import { Product } from '../models/product.model';

/**
 * Service for managing shopping cart operations with localStorage persistence
 * Handles CRUD operations for cart items and maintains data integrity
 */
@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Key used for storing cart data in localStorage
  private readonly CART_STORAGE_KEY = 'cart_items';

  constructor() { }

  /**
   * Loads cart items from localStorage
   * @returns Observable<CartItem[]> - Array of cart items or empty array if none exist
   */
  loadCart(): Observable<CartItem[]> {
    const cartData = localStorage.getItem(this.CART_STORAGE_KEY);
    const cartItems = cartData ? JSON.parse(cartData) : [];
    return of(cartItems);
  }


  /**
   * Saves cart items to localStorage
   * @param cartItems - Array of cart items to save
   * @returns Observable<CartItem[]> - The saved cart items
   */
  saveCart(cartItems: CartItem[]): Observable<CartItem[]> {
    localStorage.setItem(this.CART_STORAGE_KEY, JSON.stringify(cartItems));
    return of(cartItems);
  }


  /**
   * Adds a product to the cart or increments quantity if already exists
   * Uses immutable operations to prevent state mutations
   * @param cartItems - Current cart items array
   * @param product - Product to add to cart
   * @returns Observable<CartItem[]> - Updated cart items after addition
   */
  addToCart(cartItems: CartItem[], product: Product): Observable<CartItem[]> {
    const existingItemIndex = cartItems.findIndex(item => item.product.id === product.id);
    let updatedCartItems: CartItem[];
    
    if (existingItemIndex > -1) {
      // Update quantity if item already exists (immutable update)
      updatedCartItems = cartItems.map((item, index) => 
        index === existingItemIndex 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // Add new item with quantity 1 (immutable addition)
      updatedCartItems = [...cartItems, { product, quantity: 1 }];
    }
    
    return this.saveCart(updatedCartItems);
  }

  /**
   * Removes a product completely from the cart
   * @param cartItems - Current cart items array
   * @param productId - ID of the product to remove
   * @returns Observable<CartItem[]> - Updated cart items after removal
   */
  removeFromCart(cartItems: CartItem[], productId: number): Observable<CartItem[]> {
    // Filter out the item with matching product ID
    const updatedItems = cartItems.filter(item => item.product.id !== productId);
    return this.saveCart(updatedItems);
  }

  /**
   * Updates the quantity of a specific cart item
   * Removes the item if quantity is 0 or negative
   * @param cartItems - Current cart items array
   * @param productId - ID of the product to update
   * @param quantity - New quantity (item removed if <= 0)
   * @returns Observable<CartItem[]> - Updated cart items after quantity change
   */
  updateCartItemQuantity(cartItems: CartItem[], productId: number, quantity: number): Observable<CartItem[]> {
    const itemIndex = cartItems.findIndex(item => item.product.id === productId);
    let updatedCartItems: CartItem[];
    
    if (itemIndex > -1) {
      if (quantity <= 0) {
        // Remove item if quantity is 0 or less
        updatedCartItems = cartItems.filter(item => item.product.id !== productId);
      } else {
        // Update quantity using immutable operation
        updatedCartItems = cartItems.map((item, index) => 
          index === itemIndex 
            ? { ...item, quantity }
            : item
        );
      }
    } else {
      // Item not found, return unchanged cart
      updatedCartItems = cartItems;
    }
    
    return this.saveCart(updatedCartItems);
  }

  /**
   * Clears all items from the cart
   * Removes cart data from localStorage
   * @returns Observable<CartItem[]> - Empty cart array
   */
  clearCart(): Observable<CartItem[]> {
    localStorage.removeItem(this.CART_STORAGE_KEY);
    return of([]);
  }
}
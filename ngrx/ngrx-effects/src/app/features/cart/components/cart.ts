import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItem } from '../../../core/models/cart.model';
import * as CartActions from '../store/cart.actions';
import * as CartSelectors from '../store/cart.selectors';
import { DialogService } from '../../../shared/services/dialog.service';

/**
 * Cart Component - Displays shopping cart with items and management controls
 * Provides functionality to view, update, and manage cart items
 * Uses NgRx for state management and reactive data flow
 */
@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class CartComponent implements OnInit {
  /** Observable stream of cart items for template binding */
  cartItems$: Observable<CartItem[]>;
  
  /** Observable stream of total item count */
  totalItems$: Observable<number>;
  
  /** Observable stream of total cart price */
  totalPrice$: Observable<number>;
  
  /** Observable stream of loading state */
  loading$: Observable<boolean>;
  
  /** Observable stream of error state */
  error$: Observable<any>;

  /**
   * Constructor - Sets up observable streams from NgRx store
   * @param store - NgRx store for state management
   * @param dialogService - Dialog service for user confirmations
   */
  constructor(
    private store: Store,
    private dialogService: DialogService
  ) {
    this.cartItems$ = this.store.select(CartSelectors.selectCartItems);
    this.totalItems$ = this.store.select(CartSelectors.selectCartTotalItems);
    this.totalPrice$ = this.store.select(CartSelectors.selectCartTotalPrice);
    this.loading$ = this.store.select(CartSelectors.selectCartLoading);
    this.error$ = this.store.select(CartSelectors.selectCartError);
  }

  /**
   * Component initialization - Load cart data from localStorage
   */
  ngOnInit(): void {
    this.store.dispatch(CartActions.loadCart());
  }

  /**
   * Removes a product completely from the cart with confirmation dialog
   * Shows delete confirmation before removing the item
   * @param item - Cart item to remove
   */
  removeFromCart(item: CartItem): void {
    this.dialogService.openRemoveFromCartDialog(item.product.title).subscribe(confirmed => {
      if (confirmed) {
        this.store.dispatch(CartActions.removeFromCart({ productId: item.product.id }));
      }
    });
  }

  /**
   * Updates the quantity of a specific cart item
   * @param productId - ID of the product to update
   * @param quantity - New quantity (item removed if <= 0)
   */
  updateQuantity(productId: number, quantity: number): void {
    this.store.dispatch(CartActions.updateCartItemQuantity({ productId, quantity }));
  }

  /**
   * Clears all items from the cart with confirmation dialog
   * Shows warning confirmation before clearing the entire cart
   */
  clearCart(): void {
    this.dialogService.openClearCartDialog().subscribe(confirmed => {
      if (confirmed) {
        this.store.dispatch(CartActions.clearCart());
      }
    });
  }
}

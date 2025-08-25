import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import * as CartActions from './cart.actions';
import { CartService } from '../../../core/services/cart.service';
import * as CartSelectors from './cart.selectors';
import { Store } from '@ngrx/store';

/**
 * NgRx Effects for handling cart-related side effects
 * Manages async operations like localStorage persistence and business logic
 * Uses inject() function to avoid timing issues with Actions service
 */
@Injectable()
export class CartEffects {
  // Inject dependencies using inject() function for better timing control
  private actions$ = inject(Actions);
  private cartService = inject(CartService);
  private store = inject(Store);

  /**
   * Effect: Load cart items from localStorage on app initialization
   * Triggered by: loadCart action
   * Success: Dispatches loadCartSuccess with cart items
   * Failure: Dispatches loadCartFailure with error
   */
  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.loadCart),
      switchMap(() =>
        this.cartService.loadCart().pipe(
          map(cartItems => CartActions.loadCartSuccess({ cartItems })),
          catchError(error => of(CartActions.loadCartFailure({ error })))
        )
      )
    )
  );

  /**
   * Effect: Add product to cart with quantity management
   * Triggered by: addToCart action from product component
   * Gets current cart state and passes to service for processing
   * Success: Dispatches addToCartSuccess with updated cart
   * Failure: Dispatches addToCartFailure with error
   */
  addToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.addToCart),
      // Get current cart items from store
      withLatestFrom(
        this.store.select(CartSelectors.selectCartItems)
      ),
      switchMap(([action, currentCartItems]) => {
        return this.cartService.addToCart(currentCartItems as any[], action.product).pipe(
          map(cartItems => {
            console.log('Cart service returned:', cartItems);
            return CartActions.addToCartSuccess({ cartItems });
          }),
          catchError(error => {
            console.error('Add to cart error:', error);
            return of(CartActions.addToCartFailure({ error }));
          })
        );
      })
    )
  );

  /**
   * Effect: Remove product completely from cart
   * Triggered by: removeFromCart action from cart component
   * Gets current cart state and removes specified product
   * Success: Dispatches removeFromCartSuccess with updated cart
   * Failure: Dispatches removeFromCartFailure with error
   */
  removeFromCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.removeFromCart),
      withLatestFrom(
        this.store.select(CartSelectors.selectCartItems)
      ),
      switchMap(([action, currentCartItems]) =>
        this.cartService.removeFromCart(currentCartItems as any[], action.productId).pipe(
          map(cartItems => {
            return CartActions.removeFromCartSuccess({ cartItems });
          }),
          catchError(error => of(CartActions.removeFromCartFailure({ error })))
        )
      )
    )
  );

  /**
   * Effect: Update quantity of specific cart item
   * Triggered by: updateCartItemQuantity action from cart component
   * Handles quantity changes and removes items when quantity <= 0
   * Success: Dispatches updateCartItemQuantitySuccess with updated cart
   * Failure: Dispatches updateCartItemQuantityFailure with error
   */
  updateCartItemQuantity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.updateCartItemQuantity),
      withLatestFrom(
        this.store.select(CartSelectors.selectCartItems)
      ),
      switchMap(([action, currentCartItems]) =>
        this.cartService.updateCartItemQuantity(currentCartItems as any[], action.productId, action.quantity).pipe(
          map(cartItems => {
            return CartActions.updateCartItemQuantitySuccess({ cartItems });
          }),
          catchError(error => of(CartActions.updateCartItemQuantityFailure({ error })))
        )
      )
    )
  );

  /**
   * Effect: Clear all items from cart
   * Triggered by: clearCart action from cart component
   * Removes all cart data from localStorage
   * Success: Dispatches clearCartSuccess (no payload needed)
   * Failure: Dispatches clearCartFailure with error
   */
  clearCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.clearCart),
      switchMap(() =>
        this.cartService.clearCart().pipe(
          map(() => {
            return CartActions.clearCartSuccess();
          }),
          catchError(error => of(CartActions.clearCartFailure({ error })))
        )
      )
    )
  );
}
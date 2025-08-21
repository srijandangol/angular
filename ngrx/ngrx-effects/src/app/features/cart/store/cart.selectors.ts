import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.state';

/**
 * Cart Selectors - Provide access to cart state slices
 * Used by components to subscribe to specific parts of cart state
 */

/** Root selector for the cart feature state */
export const selectCartState = createFeatureSelector<CartState>('cart');

/** Selector to get all cart items */
export const selectCartItems = createSelector(
  selectCartState,
  (state) => state.items
);

/** Selector to get total number of items in cart */
export const selectCartTotalItems = createSelector(
  selectCartState,
  (state) => state.totalItems
);

/** Selector to get total price of all items in cart */
export const selectCartTotalPrice = createSelector(
  selectCartState,
  (state) => state.totalPrice
);

/** Selector to get cart loading state */
export const selectCartLoading = createSelector(
  selectCartState,
  (state) => state.loading
);

/** Selector to get cart error state */
export const selectCartError = createSelector(
  selectCartState,
  (state) => state.error
);
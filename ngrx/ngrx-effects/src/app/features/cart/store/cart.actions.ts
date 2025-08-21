import { createAction, props } from '@ngrx/store';
import { Product } from '../../../core/models/product.model';
import { CartItem } from '../../../core/models/cart.model';

/**
 * Cart Actions - Define all cart-related NgRx actions
 * Follow async pattern with trigger/success/failure actions
 */

// Primary Cart Actions (trigger effects)

/** Triggers adding a product to cart */
export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ product: Product }>()
);

/** Triggers removing a product from cart */
export const removeFromCart = createAction(
  '[Cart] Remove From Cart',
  props<{ productId: number }>()
);

/** Triggers updating quantity of cart item */
export const updateCartItemQuantity = createAction(
  '[Cart] Update Cart Item Quantity',
  props<{ productId: number; quantity: number }>()
);

/** Triggers clearing all cart items */
export const clearCart = createAction('[Cart] Clear Cart');

/** Triggers loading cart from localStorage */
export const loadCart = createAction('[Cart] Load Cart');

// Success Actions (dispatched by effects after successful operations)

/** Dispatched when cart is successfully loaded from localStorage */
export const loadCartSuccess = createAction(
  '[Cart] Load Cart Success',
  props<{ cartItems: CartItem[] }>()
);

/** Dispatched when product is successfully added to cart */
export const addToCartSuccess = createAction(
  '[Cart] Add To Cart Success',
  props<{ cartItems: CartItem[] }>()
);

/** Dispatched when product is successfully removed from cart */
export const removeFromCartSuccess = createAction(
  '[Cart] Remove From Cart Success',
  props<{ cartItems: CartItem[] }>()
);

/** Dispatched when cart item quantity is successfully updated */
export const updateCartItemQuantitySuccess = createAction(
  '[Cart] Update Cart Item Quantity Success',
  props<{ cartItems: CartItem[] }>()
);

/** Dispatched when cart is successfully cleared */
export const clearCartSuccess = createAction(
  '[Cart] Clear Cart Success'
);

// Failure Actions (dispatched by effects when operations fail)

/** Dispatched when cart loading fails */
export const loadCartFailure = createAction(
  '[Cart] Load Cart Failure',
  props<{ error: any }>()
);

/** Dispatched when adding to cart fails */
export const addToCartFailure = createAction(
  '[Cart] Add To Cart Failure',
  props<{ error: any }>()
);

/** Dispatched when removing from cart fails */
export const removeFromCartFailure = createAction(
  '[Cart] Remove From Cart Failure',
  props<{ error: any }>()
);

/** Dispatched when updating cart item quantity fails */
export const updateCartItemQuantityFailure = createAction(
  '[Cart] Update Cart Item Quantity Failure',
  props<{ error: any }>()
);

/** Dispatched when clearing cart fails */
export const clearCartFailure = createAction(
  '[Cart] Clear Cart Failure',
  props<{ error: any }>()
);


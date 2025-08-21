import { createReducer, on, ActionReducer } from '@ngrx/store';
import * as CartActions from './cart.actions';
import { CartState, initialCartState } from './cart.state';
import { CartItem } from '../../../core/models/cart.model';

/**
 * Helper function to calculate cart totals
 * Ensures totals never go below 0 using Math.max
 * @param items - Array of cart items
 * @returns Object with totalItems and totalPrice
 */
const calculateTotals = (items: any[]) => {
  const totalItems = Math.max(0, items.reduce((sum, item) => sum + item.quantity, 0));
  const totalPrice = Math.max(0, items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0));
  return { totalItems, totalPrice };
};

/**
 * Cart reducer handling all cart-related state changes
 * Follows async pattern with loading/success/failure states
 * All cart operations go through effects for persistence
 */
export const cartReducer: ActionReducer<CartState> = createReducer(
  initialCartState,
  
  // Loading states - Set loading to true when any cart operation starts
  on(CartActions.loadCart, CartActions.addToCart, CartActions.removeFromCart, 
     CartActions.updateCartItemQuantity, CartActions.clearCart, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  // Success states - Update cart with new data from effects
  on(CartActions.loadCartSuccess, CartActions.addToCartSuccess, 
     CartActions.removeFromCartSuccess, CartActions.updateCartItemQuantitySuccess, 
     (state, { cartItems }) => {
    // Recalculate totals to ensure accuracy and prevent negative values
    const { totalItems, totalPrice } = calculateTotals(cartItems);
    return {
      ...state,
      items: cartItems,
      totalItems,
      totalPrice,
      loading: false,
      error: null
    };
  }),

  // Clear cart success - Reset to initial state but keep loading false
  on(CartActions.clearCartSuccess, (state) => ({
    ...initialCartState,
    loading: false
  })),

  // Failure states - Preserve current state but set error and stop loading
  on(CartActions.loadCartFailure, CartActions.addToCartFailure, 
     CartActions.removeFromCartFailure, CartActions.updateCartItemQuantityFailure,
     CartActions.clearCartFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

);
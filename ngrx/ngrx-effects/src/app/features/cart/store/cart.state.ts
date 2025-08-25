import { CartItem } from '../../../core/models/cart.model';

/**
 * Cart feature state interface
 * Manages shopping cart data and async operation states
 */
export interface CartState {
  /** Array of items currently in the cart */
  items: CartItem[];
  
  /** Total count of individual items across all products */
  totalItems: number;
  
  /** Total monetary value of all cart items */
  totalPrice: number;
  
  /** Loading state for async cart operations */
  loading: boolean;
  
  /** Error state for failed cart operations */
  error: any;
}

/**
 * Initial state for the cart feature
 * Used when the application starts or cart is reset
 */
export const initialCartState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
  loading: false,
  error: null,
};

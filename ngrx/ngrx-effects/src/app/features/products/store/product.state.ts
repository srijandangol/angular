import { Product } from '../../../core/models/product.model';

/**
 * Product feature state interface
 * Manages the state of product data and async operations
 */
export interface ProductState {
  /** Array of all loaded products */
  products: Product[];
  
  /** Loading state for async operations */
  loading: boolean;
  
  /** Error state for failed operations */
  error: any;
}

/**
 * Initial state for the product feature
 * Used when the application starts or state is reset
 */
export const initialProductState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.actions';
import { ProductState, initialProductState } from './product.state';

/**
 * Product Reducer - Handles product state changes
 * Responds to product actions and updates state accordingly
 */
export const productReducer = createReducer(
  initialProductState,
  
  // Handle load products action - set loading to true
  on(ProductActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  
  // Handle successful product load - store products and stop loading
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products,
  })),
  
  // Handle failed product load - store error and stop loading
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

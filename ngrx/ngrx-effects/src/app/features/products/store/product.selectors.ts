import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.state';

/**
 * Product Selectors - Provide access to product state slices
 * Used by components to subscribe to specific parts of product state
 */

/** Root selector for the products feature state */
export const selectProductState = createFeatureSelector<ProductState>('products');

/** Selector to get all products from state */
export const selectAllProducts = createSelector(
  selectProductState,
  (state) => state.products
);

/** Selector to get loading state for products */
export const selectProductLoading = createSelector(
  selectProductState,
  (state) => state.loading
);

/** Selector to get error state for products */
export const selectProductError = createSelector(
  selectProductState,
  (state) => state.error
);

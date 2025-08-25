import { createAction, props } from '@ngrx/store';
import { Product } from '../../../core/models/product.model';

/**
 * Product Actions - Define all product-related NgRx actions
 * Follow the pattern: [Feature] Action Description
 */

/** Triggers loading of products from API */
export const loadProducts = createAction('[Products] Load Products');

/** Dispatched when products are successfully loaded */
export const loadProductsSuccess = createAction(
  '[Products] Load Products Success', 
  props<{products: Product[]}>()
);

/** Dispatched when product loading fails */
export const loadProductsFailure = createAction(
  '[Products] Load Products Failure', 
  props<{error: any}>()
);

import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../../../core/services/product.service';
import * as ProductActions from './product.actions';
import { switchMap, map, catchError, of } from 'rxjs';

/**
 * Product Effects - Handle side effects for product operations
 * Manages async operations like API calls for product data
 * Uses inject() function to avoid timing issues with Actions service
 */
@Injectable()
export class ProductEffects {
  // Inject dependencies using inject() function for better timing control
  private actions$ = inject(Actions);
  private productService = inject(ProductService);

  /**
   * Effect: Load products from external API
   * Triggered by: loadProducts action from product component
   * Success: Dispatches loadProductsSuccess with product data
   * Failure: Dispatches loadProductsFailure with error
   */
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      switchMap(() =>
        this.productService.getProducts().pipe(
          map(products => ProductActions.loadProductsSuccess({ products })),
          catchError(error => of(ProductActions.loadProductsFailure({ error })))
        )
      )
    )
  );
}

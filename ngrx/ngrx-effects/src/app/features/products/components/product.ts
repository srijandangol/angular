import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../../../core/models/product.model';
import * as ProductActions from '../store/product.actions';
import * as ProductSelectors from '../store/product.selectors';
import * as CartActions from '../../cart/store/cart.actions';
import { DialogService } from '../../../shared/services/dialog.service';

/**
 * Product Component - Displays product catalog and handles product interactions
 * Shows list of products with add to cart functionality
 * Uses NgRx for state management and reactive data flow
 */
@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
})
export class ProductComponent implements OnInit {
  /** Observable stream of all products for template binding */
  products$: Observable<Product[]>;
  
  /** Observable stream of loading state */
  loading$: Observable<boolean>;
  
  /** Observable stream of error state */
  error$: Observable<any>;

  /**
   * Constructor - Sets up observable streams from NgRx store
   * @param store - NgRx store for state management
   * @param router - Router for navigation
   * @param dialogService - Dialog service for user confirmations
   */
  constructor(
    private store: Store,
    private router: Router,
    private dialogService: DialogService
  ) {
    this.products$ = this.store.select(ProductSelectors.selectAllProducts);
    this.loading$ = this.store.select(ProductSelectors.selectProductLoading);
    this.error$ = this.store.select(ProductSelectors.selectProductError);
  }

  /**
   * Component initialization - Load products from API
   */
  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadProducts());
  }

  /**
   * Adds a product to the shopping cart with authentication check
   * Shows login dialog if user is not authenticated
   * @param product - The product to add to cart
   */
  addToCart(product: Product): void {
    const user = localStorage.getItem('user');
    
    if (user) {
      // User is authenticated, add to cart
      this.store.dispatch(CartActions.addToCart({ product }));
      
      // Show success dialog
      this.dialogService.openAddToCartDialog(product.title).subscribe();
    } else {
      // User not authenticated, show login dialog
      this.dialogService.openWarningDialog(
        'Please Login',
        'You need to login to add items to your cart. Would you like to go to the login page?',
        'Go to Login'
      ).subscribe(result => {
        if (result) {
          this.router.navigate(['/user/login']);
        }
      });
    }
  }

  /**
   * Check if user is authenticated
   * @returns boolean indicating if user is logged in
   */
  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }
}

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as CartSelectors from '../../../features/cart/store/cart.selectors';
import * as UserSelectors from '../../../features/user/store/user.selectors';
import * as UserActions from '../../../features/user/store/user.actions';
import { User } from '../../../features/user/models/user.model';

/**
 * Header Component - Application navigation header with cart information
 * Displays cart item count and total price in the header
 * Provides navigation to cart page
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent implements OnInit {
  /** Observable stream of total cart item count for header display */
  cartItemCount$: Observable<number>;
  
  /** Observable stream of total cart price for header display */
  cartTotalPrice$: Observable<number>;

  /** Observable stream of current user for authentication display */
  currentUser$: Observable<User | null>;

  /**
   * Constructor - Sets up cart and user observables and router
   * @param store - NgRx store for cart and user state access
   * @param router - Angular router for navigation
   */
  constructor(private store: Store, private router: Router) {
    this.cartItemCount$ = this.store.select(CartSelectors.selectCartTotalItems);
    this.cartTotalPrice$ = this.store.select(CartSelectors.selectCartTotalPrice);
    this.currentUser$ = this.store.select(UserSelectors.selectCurrentUser);
  }

  /**
   * Component initialization - Load user from localStorage if exists
   */
  ngOnInit(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        this.store.dispatch(UserActions.loginSuccess({ user }));
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('user');
      }
    }
  }

  /**
   * Navigates to the cart page
   */
  navigateToCart() {
    this.router.navigate(['/cart']);
  }

  /**
   * Navigates to the login page
   */
  navigateToLogin() {
    this.router.navigate(['/user/login']);
  }

  /**
   * Navigates to the signup page
   */
  navigateToSignup() {
    this.router.navigate(['/user/signup']);
  }

  /**
   * Logs out the current user
   */
  logout() {
    this.store.dispatch(UserActions.logout());
    this.router.navigate(['/']);
  }
}

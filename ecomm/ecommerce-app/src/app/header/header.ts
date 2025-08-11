import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../service/auth/auth.service';
import { CartService } from '../service/cart/cart.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Input() isSearchNeeded: boolean = true;
  searchQuery = '';
  cartCount = 0;
  isLoggedIn = false;
  isAdmin = false;
  private authSub?: Subscription;
  private cartSub?: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.authSub = this.authService.isLoggedIn$.subscribe((status) => {
      // If user just logged out, redirect to login
      if (this.isLoggedIn && !status) {
        this.router.navigate(['/login']);
      }

      this.isLoggedIn = status;
      this.isAdmin = this.authService.isAdmin();

      // Optionally reset cart count if logged out
      if (!status) {
        this.cartCount = 0;
      }
    });

    this.cartSub = this.cartService.cartCount$.subscribe((count) => {
      // Only update cart count if logged in
      if (this.isLoggedIn) {
        this.cartCount = count;
      } else {
        this.cartCount = 0;
      }
    });
  }

  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchQuery = target.value;
    console.log('Searching for:', this.searchQuery);
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.authSub?.unsubscribe();
    this.cartSub?.unsubscribe();
  }
}

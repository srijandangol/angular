import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  selectedProductIds: number[] = [];

  constructor(private cartService: CartService, private router: Router, private snackBar: MatSnackBar) {}

 ngOnInit(): void {
  if (!this.cartService.isLoggedIn()) {
    this.router.navigate(['/login']);
    return; // stop further execution
  }

  // Only load cart items if logged in
  this.cartItems = this.cartService.getCartItems();
}


  toggleSelection(id: number, checked: boolean): void {
    if (checked) {
      this.selectedProductIds.push(id);
    } else {
      this.selectedProductIds = this.selectedProductIds.filter(pid => pid !== id);
    }
  }

  removeItem(id: number): void {
    this.cartService.removeItemById(id);
    this.cartItems = this.cartService.getCartItems();
    this.snackBar.open('Item removed from cart', 'Close', { duration: 2000 });
  }

  removeSelected(): void {
    this.cartService.removeSelectedItems(this.selectedProductIds);
    this.cartItems = this.cartService.getCartItems();
    this.selectedProductIds = [];
    this.snackBar.open('Selected items removed', 'Close', { duration: 2000 });
  }

  getTotalPrice(): number {
  return this.cartItems.reduce((total, item) => total + (item.price || 0), 0);
}


  checkoutSelected(): void {
  const selectedItems = this.cartItems.filter(item => this.selectedProductIds.includes(item.id));

  if (selectedItems.length === 0) {
    alert('Please select at least one item to checkout.');
    return;
  }

  // Show alert
  alert('Checkout successful for selected items!');

  // Keep only the unselected items in cart
  this.cartItems = this.cartItems.filter(item => !this.selectedProductIds.includes(item.id));
  this.selectedProductIds = [];

  // Update localStorage
  localStorage.setItem('cart', JSON.stringify(this.cartItems));
}

}

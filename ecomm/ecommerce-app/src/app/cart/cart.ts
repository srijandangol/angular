import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart/cart.service';
import { Product } from '../models/product-model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DialogService } from '../shared/services/dialog.service';
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

  constructor(
    private cartService: CartService, 
    private router: Router, 
    private snackBar: MatSnackBar,
    private dialogService: DialogService
  ) {}

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
    const item = this.cartItems.find(item => item.id === id);
    const itemName = item ? item.productName : 'this item';
    
    this.dialogService.openDeleteDialog(
      'Remove Item',
      `Are you sure you want to remove "${itemName}" from your cart?`,
      'Remove',
      'Cancel'
    ).subscribe(result => {
      if (result) {
        this.cartService.removeItemById(id);
        this.cartItems = this.cartService.getCartItems();
        this.snackBar.open('Item removed from cart', 'Close', { duration: 2000 });
      }
    });
  }

  removeSelected(): void {
    if (this.selectedProductIds.length === 0) {
      this.dialogService.openWarningDialog(
        'No Items Selected',
        'Please select at least one item to remove.',
        'OK'
      );
      return;
    }

    this.dialogService.openDeleteDialog(
      'Remove Selected Items',
      `Are you sure you want to remove ${this.selectedProductIds.length} selected item(s) from your cart?`,
      'Remove All',
      'Cancel'
    ).subscribe(result => {
      if (result) {
        this.cartService.removeSelectedItems(this.selectedProductIds);
        this.cartItems = this.cartService.getCartItems();
        this.selectedProductIds = [];
        this.snackBar.open('Selected items removed', 'Close', { duration: 2000 });
      }
    });
  }

  getTotalPrice(): number {
  return this.cartItems.reduce((total, item) => total + (item.productPrice || 0), 0);
}


  checkoutSelected(): void {
    const selectedItems = this.cartItems.filter(item => this.selectedProductIds.includes(item.id));

    if (selectedItems.length === 0) {
      this.dialogService.openWarningDialog(
        'No Items Selected',
        'Please select at least one item to checkout.',
        'OK'
      );
      return;
    }

    const totalPrice = selectedItems.reduce((total, item) => total + (item.productPrice || 0), 0);

    this.dialogService.openInfoDialog(
      'Confirm Checkout',
      `Are you sure you want to checkout ${selectedItems.length} item(s) for $${totalPrice.toFixed(2)}?`,
      'Checkout',
      'Cancel'
    ).subscribe(result => {
      if (result) {
        // Keep only the unselected items in cart
        this.cartItems = this.cartItems.filter(item => !this.selectedProductIds.includes(item.id));
        this.selectedProductIds = [];

        // Update localStorage
        localStorage.setItem('cart', JSON.stringify(this.cartItems));

        // Show success dialog
        this.dialogService.openSuccessDialog(
          'Checkout Successful!',
          `Your order has been placed successfully. Total: $${totalPrice.toFixed(2)}`,
          'OK'
        );
      }
    });
  }

}

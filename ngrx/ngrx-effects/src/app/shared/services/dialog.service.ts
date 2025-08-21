import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmationDialogComponent, ConfirmationDialogData } from '../components/confirmation-dialog/confirmation-dialog.component';

/**
 * Dialog Service - Centralized service for managing MatDialog operations
 * Provides convenient methods for different types of confirmation dialogs
 * Used throughout the application for user confirmations
 */
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  /**
   * Constructor - Injects MatDialog service
   * @param dialog - Angular Material Dialog service
   */
  constructor(private dialog: MatDialog) {}

  /**
   * Opens a success confirmation dialog
   * @param title - Dialog title
   * @param message - Dialog message
   * @param confirmText - Confirm button text (optional)
   * @returns Observable<boolean> - true if confirmed, false if cancelled
   */
  openSuccessDialog(
    title: string, 
    message: string, 
    confirmText: string = 'OK'
  ): Observable<boolean> {
    const dialogData: ConfirmationDialogData = {
      title,
      message,
      confirmText,
      cancelText: 'Close',
      type: 'success'
    };

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: dialogData,
      disableClose: false
    });

    return dialogRef.afterClosed();
  }

  /**
   * Opens a delete confirmation dialog
   * @param title - Dialog title
   * @param message - Dialog message
   * @param confirmText - Confirm button text (optional)
   * @returns Observable<boolean> - true if confirmed, false if cancelled
   */
  openDeleteDialog(
    title: string, 
    message: string, 
    confirmText: string = 'Delete'
  ): Observable<boolean> {
    const dialogData: ConfirmationDialogData = {
      title,
      message,
      confirmText,
      cancelText: 'Cancel',
      type: 'delete'
    };

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: dialogData,
      disableClose: false
    });

    return dialogRef.afterClosed();
  }

  /**
   * Opens a warning confirmation dialog
   * @param title - Dialog title
   * @param message - Dialog message
   * @param confirmText - Confirm button text (optional)
   * @returns Observable<boolean> - true if confirmed, false if cancelled
   */
  openWarningDialog(
    title: string, 
    message: string, 
    confirmText: string = 'Continue'
  ): Observable<boolean> {
    const dialogData: ConfirmationDialogData = {
      title,
      message,
      confirmText,
      cancelText: 'Cancel',
      type: 'warning'
    };

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: dialogData,
      disableClose: false
    });

    return dialogRef.afterClosed();
  }

  /**
   * Opens an info confirmation dialog
   * @param title - Dialog title
   * @param message - Dialog message
   * @param confirmText - Confirm button text (optional)
   * @returns Observable<boolean> - true if confirmed, false if cancelled
   */
  openInfoDialog(
    title: string, 
    message: string, 
    confirmText: string = 'OK'
  ): Observable<boolean> {
    const dialogData: ConfirmationDialogData = {
      title,
      message,
      confirmText,
      cancelText: 'Cancel',
      type: 'info'
    };

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: dialogData,
      disableClose: false
    });

    return dialogRef.afterClosed();
  }

  /**
   * Opens an add to cart success dialog
   * @param productName - Name of the product added
   * @returns Observable<boolean> - true if confirmed, false if cancelled
   */
  openAddToCartDialog(productName: string): Observable<boolean> {
    return this.openSuccessDialog(
      'Added to Cart',
      `${productName} has been added to your cart successfully!`,
      'Continue Shopping'
    );
  }

  /**
   * Opens a remove from cart confirmation dialog
   * @param productName - Name of the product to remove
   * @returns Observable<boolean> - true if confirmed, false if cancelled
   */
  openRemoveFromCartDialog(productName: string): Observable<boolean> {
    return this.openDeleteDialog(
      'Remove Item',
      `Are you sure you want to remove ${productName} from your cart?`,
      'Remove'
    );
  }

  /**
   * Opens a clear cart confirmation dialog
   * @returns Observable<boolean> - true if confirmed, false if cancelled
   */
  openClearCartDialog(): Observable<boolean> {
    return this.openWarningDialog(
      'Clear Cart',
      'Are you sure you want to remove all items from your cart? This action cannot be undone.',
      'Clear Cart'
    );
  }
}

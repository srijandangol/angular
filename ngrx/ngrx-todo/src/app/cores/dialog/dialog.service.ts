import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog';
import { SuccessDialogComponent } from './success-dialog/success-dialog';

/**
 * Dialog Service - Centralized service for managing Material dialogs
 * 
 * This service provides convenient methods for opening different types of dialogs
 * throughout the application with consistent styling and behavior.
 */
@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  /**
   * Open a confirmation dialog for destructive actions
   * @param title - Dialog title
   * @param message - Confirmation message
   * @param confirmText - Text for confirm button (default: 'Confirm')
   * @returns Observable<boolean> - true if confirmed, false if cancelled
   */
  openConfirmationDialog(
    title: string, 
    message: string, 
    confirmText: string = 'Confirm'
  ): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: { title, message, confirmText },
      disableClose: true // Prevent closing by clicking outside
    });

    return dialogRef.afterClosed();
  }

  /**
   * Open a success dialog to show positive feedback
   * @param title - Dialog title
   * @param message - Success message
   * @returns Observable<void> - Completes when dialog is closed
   */
  openSuccessDialog(title: string, message: string): Observable<void> {
    const dialogRef = this.dialog.open(SuccessDialogComponent, {
      width: '400px',
      data: { title, message },
      disableClose: true
    });

    return dialogRef.afterClosed();
  }

  /**
   * Open a delete confirmation dialog with predefined styling
   * @param itemName - Name of the item being deleted
   * @returns Observable<boolean> - true if deletion confirmed
   */
  openDeleteConfirmation(itemName: string): Observable<boolean> {
    return this.openConfirmationDialog(
      'Delete Todo',
      `Are you sure you want to delete "${itemName}"? This action cannot be undone.`,
      'Delete'
    );
  }

  /**
   * Open a success dialog for todo addition
   * @param todoText - The todo that was added
   * @returns Observable<void> - Completes when dialog is closed
   */
  openTodoAddedSuccess(todoText: string): Observable<void> {
    return this.openSuccessDialog(
      'Todo Added',
      `"${todoText}" has been successfully added to your todo list.`
    );
  }

  /**
   * Open a confirmation dialog for clearing all todos
   * @returns Observable<boolean> - true if clear all confirmed
   */
  openClearAllConfirmation(): Observable<boolean> {
    return this.openConfirmationDialog(
      'Clear All Todos',
      'Are you sure you want to delete all todos? This action cannot be undone.',
      'Clear All'
    );
  }
}

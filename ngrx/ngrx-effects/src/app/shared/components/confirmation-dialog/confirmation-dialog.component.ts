import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

/**
 * Dialog data interface for confirmation dialogs
 */
export interface ConfirmationDialogData {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  type?: 'success' | 'warning' | 'delete' | 'info';
}

/**
 * Confirmation Dialog Component - Reusable dialog for user confirmations
 * Supports different dialog types with appropriate styling and icons
 * Used for cart operations like add, delete, and clear confirmations
 */
@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
  standalone: false
})
export class ConfirmationDialogComponent {
  
  /**
   * Constructor - Injects dialog data and dialog reference
   * @param dialogRef - Reference to the dialog for closing
   * @param data - Dialog configuration data
   */
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData
  ) {
    // Set default values if not provided
    this.data.confirmText = this.data.confirmText || 'Confirm';
    this.data.cancelText = this.data.cancelText || 'Cancel';
    this.data.type = this.data.type || 'info';
  }

  /**
   * Handles confirm button click
   * Closes dialog with true result
   */
  onConfirm(): void {
    this.dialogRef.close(true);
  }

  /**
   * Handles cancel button click
   * Closes dialog with false result
   */
  onCancel(): void {
    this.dialogRef.close(false);
  }

  /**
   * Gets the appropriate icon based on dialog type
   * @returns Material icon name
   */
  getIcon(): string {
    switch (this.data.type) {
      case 'success':
        return 'check_circle';
      case 'warning':
        return 'warning';
      case 'delete':
        return 'delete';
      default:
        return 'info';
    }
  }

  /**
   * Gets the appropriate color class based on dialog type
   * @returns CSS class name for styling
   */
  getColorClass(): string {
    switch (this.data.type) {
      case 'success':
        return 'success';
      case 'warning':
        return 'warning';
      case 'delete':
        return 'delete';
      default:
        return 'info';
    }
  }
}

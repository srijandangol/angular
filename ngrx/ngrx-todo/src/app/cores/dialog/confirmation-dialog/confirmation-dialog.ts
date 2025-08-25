import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

/**
 * Confirmation Dialog Component
 * 
 * A reusable dialog component for confirming user actions like deletions.
 * Displays a message and provides confirm/cancel options.
 */
@Component({
  selector: 'app-confirmation-dialog',
  standalone: false,
  template: `
    <div class="p-6">
      <h2 mat-dialog-title class="text-lg font-semibold mb-4">{{ data.title }}</h2>
      <div mat-dialog-content class="mb-6">
        <p class="text-gray-600">{{ data.message }}</p>
      </div>
      <div mat-dialog-actions class="flex justify-end gap-2">
        <button 
          mat-button 
          (click)="onCancel()"
          class="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
        >
          Cancel
        </button>
        <button 
          mat-button 
          (click)="onConfirm()"
          class="px-4 py-2 bg-red-500 text-white hover:bg-red-600 rounded"
        >
          {{ data.confirmText || 'Confirm' }}
        </button>
      </div>
    </div>
  `
})
export class ConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string;
      message: string;
      confirmText?: string;
    }
  ) {}

  /**
   * Handle cancel action - closes dialog with false result
   */
  onCancel(): void {
    this.dialogRef.close(false);
  }

  /**
   * Handle confirm action - closes dialog with true result
   */
  onConfirm(): void {
    this.dialogRef.close(true);
  }
}

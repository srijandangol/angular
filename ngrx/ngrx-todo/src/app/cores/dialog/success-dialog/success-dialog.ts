import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

/**
 * Success Dialog Component
 * 
 * A reusable dialog component for showing success messages after actions.
 * Displays a success message with an OK button.
 */
@Component({
  selector: 'app-success-dialog',
  standalone: false,
  template: `
    <div class="p-6">
      <div class="flex items-center mb-4">
        <mat-icon class="text-green-500 mr-3 text-3xl">check_circle</mat-icon>
        <h2 mat-dialog-title class="text-lg font-semibold">{{ data.title }}</h2>
      </div>
      <div mat-dialog-content class="mb-6">
        <p class="text-gray-600">{{ data.message }}</p>
      </div>
      <div mat-dialog-actions class="flex justify-end">
        <button 
          mat-button 
          (click)="onClose()"
          class="px-4 py-2 bg-green-500 text-white hover:bg-green-600 rounded"
        >
          OK
        </button>
      </div>
    </div>
  `
})
export class SuccessDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<SuccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string;
      message: string;
    }
  ) {}

  /**
   * Handle close action - closes the dialog
   */
  onClose(): void {
    this.dialogRef.close();
  }
}

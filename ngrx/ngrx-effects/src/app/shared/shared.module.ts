import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

/**
 * Shared Module - Contains reusable components used across the application
 * Exports common components that can be imported by feature modules
 * Centralizes shared functionality to avoid code duplication
 */
@NgModule({
  declarations: [
    // Shared components available throughout the app
    HeaderComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    // Common Angular modules needed by shared components
    CommonModule,
    RouterModule,
    // Material Design modules for dialog functionality
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    // Components exported for use in other modules
    HeaderComponent,
    ConfirmationDialogComponent,
    // Export Material modules for use in other modules
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedModule { }

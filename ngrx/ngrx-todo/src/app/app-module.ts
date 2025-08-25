import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TodoInputModule } from './cores/todo-input/todo-input-module';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './cores/store/todo.reducer';

// Material Dialog Components
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ConfirmationDialogComponent } from './cores/dialog/confirmation-dialog/confirmation-dialog';
import { SuccessDialogComponent } from './cores/dialog/success-dialog/success-dialog';

@NgModule({
  declarations: [
    App,
    ConfirmationDialogComponent,
    SuccessDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot({todos: todoReducer}),
    TodoInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

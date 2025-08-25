import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoInputComponent } from './todo-input';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    TodoInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    TodoInputComponent
  ]
})
export class TodoInputModule { }

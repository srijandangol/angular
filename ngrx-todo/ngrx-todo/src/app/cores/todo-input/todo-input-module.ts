import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoInputComponent } from './todo-input';

@NgModule({
  declarations: [
    TodoInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoInputComponent
  ]
})
export class TodoInputModule { }

// Angular core imports
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// NgRx state management imports
import { TodoState } from '../state/todo.state';
import { Store } from '@ngrx/store';
import { addTodo, removeTodo, clearAllTodos } from '../store/todo.actions';
import { selectAllTodos } from '../store/todo.selector';

// RxJS imports
import { Observable } from 'rxjs';

// Dialog service import
import { DialogService } from '../dialog/dialog.service';

/**
 * TodoInputComponent - Main component for managing todo items
 * 
 * This component provides functionality to:
 * - Add new todo items with form validation
 * - Display all existing todos from NgRx store
 * - Remove todos by index
 * - Reactive form handling with validation
 */
@Component({
  selector: 'app-todo-input',
  standalone: false,
  templateUrl: './todo-input.html',
  styleUrl: './todo-input.scss'
})
export class TodoInputComponent implements OnInit {
  // Reactive form for todo input with validation
  todoForm!: FormGroup;
  
  // Observable stream of todos from NgRx store
  todos$: Observable<string[]>;

  /**
   * Constructor - Initializes the component with required dependencies
   * @param fb FormBuilder - Angular service for creating reactive forms
   * @param store Store - NgRx store for state management
   */
  constructor(
    private fb: FormBuilder, 
    private store: Store<{todos: TodoState}>,
    private dialogService: DialogService
  ) {
    // Subscribe to todos from the store using selector
    this.todos$ = this.store.select(selectAllTodos);
  }

  /**
   * Angular lifecycle hook - Initialize component after construction
   * Sets up the reactive form with validation rules
   */
  ngOnInit(): void {
    this.todoForm = this.fb.group({
      newTodo: ['', Validators.required] // Required field validation
    })
  }

  /**
   * Add a new todo item to the store
   * Validates form input, dispatches addTodo action, and shows success dialog
   */
  add(): void {
    // Early return if form is invalid
    if(this.todoForm.invalid) return;

    // Get the todo text and trim whitespace
    const todo = this.todoForm.value.newTodo.trim();
    
    // Early return if todo is empty after trimming
    if(!todo) return;

    // Dispatch action to add todo to store
    this.store.dispatch(addTodo({todo}));
    
    // Reset form after successful addition
    this.todoForm.reset();
    
    // Show success dialog to provide user feedback
    // The dialog service returns an Observable that completes when dialog is closed
    // We subscribe to trigger the dialog opening, no need to handle the result
    this.dialogService.openTodoAddedSuccess(todo).subscribe();
  }

  /**
   * Remove a todo item from the store by index
   * Shows confirmation dialog before deletion to prevent accidental deletions
   * @param index number - The index of the todo to remove
   * @param todoText string - The text of the todo being removed for display in dialog
   */
  remove(index: number, todoText: string): void {
    // Show confirmation dialog before deletion to ensure user intent
    // The dialog service returns an Observable<boolean> where:
    // - true means user clicked "Delete" (confirmed)
    // - false means user clicked "Cancel" or closed dialog
    this.dialogService.openDeleteConfirmation(todoText).subscribe(confirmed => {
      if (confirmed) {
        // Only dispatch the remove action if user confirmed the deletion
        // This prevents accidental deletions and provides better UX
        this.store.dispatch(removeTodo({ index }));
      }
      // If not confirmed, do nothing - todo remains in the list
    });
  }

  /**
   * Clear all todos from the store
   * Shows confirmation dialog before clearing all todos to prevent accidental loss
   */
  clearAll(): void {
    // Show confirmation dialog before clearing all todos
    // This prevents accidental clearing of the entire todo list
    this.dialogService.openClearAllConfirmation().subscribe(confirmed => {
      if (confirmed) {
        // Only dispatch the clear all action if user confirmed
        // This removes all todos from the store state
        this.store.dispatch(clearAllTodos());
      }
      // If not confirmed, do nothing - todos remain in the list
    });
  }

}

// Angular core imports
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// NgRx state management imports
import { TodoState } from '../state/todo.state';
import { Store } from '@ngrx/store';
import { addTodo, removeTodo } from '../store/todo.actions';
import { selectAllTodos } from '../store/todo.selector';

// RxJS imports
import { Observable } from 'rxjs';

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
  constructor(private fb: FormBuilder, private store: Store<{todos: TodoState}>) {
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
   * Validates form input and dispatches addTodo action
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
  }

  /**
   * Remove a todo item from the store by index
   * @param index number - The index of the todo to remove
   */
  remove(index: number): void {
    // Dispatch action to remove todo from store
    this.store.dispatch(removeTodo({ index }));
  }

}

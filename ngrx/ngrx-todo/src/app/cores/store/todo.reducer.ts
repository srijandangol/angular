import { createReducer, on } from '@ngrx/store';
import { addTodo, removeTodo, clearAllTodos } from './todo.actions';
import { initialState } from '../state/todo.state';

/**
 * Todo Reducer - Pure functions that handle state transitions
 * 
 * Reducers specify how the application's state changes in response to actions.
 * They are pure functions that take the previous state and an action, and return
 * the next state. They must not mutate the existing state but return a new state object.
 */
export const todoReducer = createReducer(
  initialState, // Starting state

  /**
   * Handle Add Todo Action
   * Creates a new state with the new todo appended to the todos array
   * Uses spread operator to maintain immutability
   */
  on(addTodo, (state, { todo }) => ({
    ...state, // Spread existing state properties
    todos: [...state.todos, todo] // Create new array with existing todos + new todo
  })),

  /**
   * Handle Remove Todo Action
   * Creates a new state with the specified todo filtered out by index
   * Uses filter to create a new array without the removed item
   */
  on(removeTodo, (state, { index }) => ({
    ...state, // Spread existing state properties
    todos: state.todos.filter((_, i) => i !== index) // Filter out todo at specified index
  })),

  /**
   * Handle Clear All Todos Action
   * Resets the todos array to empty state
   * Returns to initial state with no todos
   */
  on(clearAllTodos, (state) => ({
    ...state, // Spread existing state properties
    todos: [] // Reset todos array to empty
  }))
);

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "../state/todo.state";

/**
 * Todo Selectors - Efficient state queries for components
 * 
 * Selectors are pure functions used for obtaining slices of store state.
 * They provide a way to compute derived data from the store state and
 * are memoized for performance optimization.
 */

/**
 * Feature Selector - Selects the todo feature state from the root state
 * 
 * This selector extracts the 'todos' slice from the application's root state.
 * It's used as the base for more specific selectors.
 */
export const selectTodoState = createFeatureSelector<TodoState>('todos');

/**
 * All Todos Selector - Selects the todos array from the todo state
 * 
 * This selector extracts the todos array from the todo state slice.
 * It's memoized, so it only recalculates when the todos array changes.
 * Components can subscribe to this selector to get reactive updates.
 * 
 * @returns Observable<string[]> - Array of todo strings
 */
export const selectAllTodos = createSelector(
    selectTodoState, // Input selector
    (state: TodoState) => state.todos // Projection function - extracts todos array
);
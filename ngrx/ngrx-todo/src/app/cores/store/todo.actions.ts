import { createAction, props } from "@ngrx/store";

/**
 * Todo Actions - Define all possible actions for todo state management
 * 
 * Actions are payloads of information that send data from the application
 * to the store. They are the only source of information for the store.
 * Each action describes what happened but not how the state changes.
 */

/**
 * Add Todo Action - Dispatched when a new todo is created
 * 
 * This action carries the todo text as payload and triggers the reducer
 * to add the new todo to the state array.
 * 
 * @param todo - The todo text to be added to the list
 */
export const addTodo = createAction(
    '[Todo] Add Todo', // Action type identifier
    props<{todo: string}>() // Payload: todo text as string
);

/**
 * Remove Todo Action - Dispatched when a todo is deleted
 * 
 * This action carries the index of the todo to be removed and triggers
 * the reducer to filter out the todo at the specified index.
 * 
 * @param index - The array index of the todo to be removed
 */
export const removeTodo = createAction(
    '[Todo] Remove Todo', // Action type identifier
    props<{index: number}>() // Payload: index as number
);

/**
 * Clear All Todos Action - Dispatched when all todos are cleared
 * 
 * This action has no payload and triggers the reducer to reset
 * the todos array to an empty state.
 */
export const clearAllTodos = createAction(
    '[Todo] Clear All Todos' // Action type identifier
);
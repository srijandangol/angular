/**
 * TodoState Interface - Defines the shape of the todo state
 * 
 * This interface represents the structure of the todo slice of the application state.
 * It follows the NgRx pattern of having a well-defined state shape for predictable
 * state management and type safety.
 */
export interface TodoState {
    /** Array of todo items as strings */
    todos: string[];
}

/**
 * Initial State - Default state when the application starts
 * 
 * This represents the initial state of the todo feature when the app loads.
 * Starting with an empty array ensures a clean slate for users.
 */
export const initialState: TodoState = {
    todos: [] // Empty array - no todos initially
}
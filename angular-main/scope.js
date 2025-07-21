/** ========================
 *        JavaScript Scope
 * ======================== */

/**
 * 🔹 Block Scope:
 * Variables are only accessible inside the block `{}` where they are declared.
 * `let` and `const` are block-scoped.
 */
function displayScopes() {
    let message = "local";  // Outer block (function scope)

    if (true) {
        let message = "block-level";  // New variable inside this block
        console.log(`inner scope: ${message}`); // Output: inner scope: block-level
    }

    console.log(`outer scope: ${message}`); // Output: outer scope: local
}

displayScopes();

/**
 * 🔹 Function Scope:
 * Variables declared with `var` inside a function are not accessible outside the function.
 */
function greetFunctionScope() {
    var message = "Hello from function";
    console.log(`Function Scope: ${message}`); // Output: Function Scope: Hello from function
}

greetFunctionScope();

// This will throw a ReferenceError because `message` is not in global scope:
try {
    console.log(`Outside Function: ${message}`); // ❌ ReferenceError
} catch (error) {
    console.log(`Error: ${error.message}`); // Safely catch and show error
}

/**
 * 🔹 Global Scope:
 * Variables declared outside of any function or block are accessible anywhere.
 */
var globalMessage = "Hello from global";

function greetGlobal() {
    console.log(`Inside Function: ${globalMessage}`); // Output: Inside Function: Hello from global
}

greetGlobal();

console.log(`Outside Function: ${globalMessage}`); // Output: Outside Function: Hello from global

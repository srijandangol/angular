/** Variables in JavaScript **/

/** 
 * var, let, const are used to declare variables, but they behave differently:
 *
 * 1. var:
 *    - Function-scoped: It means the variable is scoped to the function in which it is declared.
 *    - Allows redeclaration: You can declare the same variable multiple times with var in the same scope.
 *    - Can be updated/reassigned.
 *
 * 2. let:
 *    - Block-scoped: It means the variable is scoped within the nearest enclosing block (like { }).
 *    - Does NOT allow redeclaration in the same scope.
 *    - Can be updated/reassigned.
 *
 * 3. const:
 *    - Block-scoped, like let.
 *    - Immutable binding: Once assigned, you cannot reassign the variable to a new value.
 *    - The value itself can be mutable if it's an object or array, but the binding cannot change.
 */

/** Examples **/

var a = "Hello World"; 
console.log(a); 
// Output: Hello World
// 'a' is declared using var, so it is function scoped and can be redeclared or updated later.

let c = 12;
let b = 12;
console.log(c + b); 
// Output: 24
// 'c' and 'b' are declared using let, block scoped and cannot be redeclared in the same block.
// They hold numeric values and are added here.

const ap = 12;
let d = "phase";
console.log(ap + d); 
// Output: 12phase
// 'ap' is a constant numeric value.
// 'd' is a string declared with let.
// Using '+' between a number and a string results in string concatenation in JavaScript.

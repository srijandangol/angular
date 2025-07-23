//Hoisting
/**Hoisting is JavaScript’s default behavior of moving declarations to the top of their scope before code execution. */

//variable hoisting
/** When you use var to declare a variable, the declaration is hoisted to the top, but its value is not assigned until the code execution reaches the variable’s initialization.*/

console.log(a)
var a = 5 //The declaration var a is hoisted to the top, but a is initialized with undefined. Hence, logging results in undefined.

//Function Hoisting
/**Function declarations are hoisted with both their name and the function body. This means the function can be called before its definition in the code. */
greet();
function greet(){
    console.log("Hello")
}
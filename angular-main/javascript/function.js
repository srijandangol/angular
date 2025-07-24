/** ===========================
 *        JavaScript Functions
 * =========================== */

/** 
 * 1. Simple Function Declaration and Call
 * - Defines a function named `greet` that prints "hello world"
 * - Calling `greet()` executes the code inside it
 */
function greet() {
    console.log("hello world");
}

greet();  // Output: hello world


/** 
 * 2. Function Expression
 * - Defines an anonymous function and assigns it to a variable `displayPI`
 * - When `displayPI()` is called, it prints "pi = 3.14"
 */
let displayPI = function() {
    console.log("pi = 3.14");
};

displayPI();  // Output: pi = 3.14


/**
 * 3. Function with Parameter (Argument)
 * - Function `greet` now takes a parameter `name`
 * - Prints a personalized greeting using template literals
 */
function greet(name) {
    console.log(`hello ${name}`);
}

greet("ram");   // Output: hello ram
greet("ahbs");  // Output: hello ahbs


/**
 * Function with two parameters: firstName and lastName
 * - Demonstrates multiple parameters
 */
function greetUser(firstName, lastName) {
  console.log(`Hello, ${firstName} ${lastName}!`);
}

// Calling the function with arguments
greetUser("Srijan", "Dangol"); // Output: Hello, Srijan Dangol!
greetUser("Robin", "Morgan");  // Output: Hello, Robin Morgan!

/** 
 * Explanation:
 * - `firstName` and `lastName` are parameters (placeholders).
 * - "Srijan", "Dangol", etc. are arguments passed during the call.
 * - The function uses these arguments to print a personalized greeting.
 */


/**
 * Default Parameters (ES6 feature)
 * - Assign default values if no argument is provided
 */
function greetWithDefault(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greetWithDefault("Srijan"); // Output: Hello, Srijan!
greetWithDefault();         // Output: Hello, Guest!


/**
 * 4. Function to Calculate Factorial
 * - Takes a number `num` as input
 * - Calculates factorial using a for loop
 * - Prints the result
 */
function calculateFactorial(num) {
    let fact = 1;           // Initialize factorial to 1
    for (let i = 1; i <= num; i++) {
        fact *= i;          // Multiply fact by current number
    }
    console.log(fact);       // Print the factorial
}

calculateFactorial(5);     // Output: 120 (5! = 5×4×3×2×1)


/**
 * 5. Rest Parameters
 * - Accepts any number of arguments as an array `names`
 * - Loops through each name and prints a greeting
 */
function greetAll(...names) {
  names.forEach(name => {
    console.log(`Hello, ${name}!`);
  });
}

greetAll("Srijan", "Robin", "Morgan");
// Output:
// Hello, Srijan!
// Hello, Robin!
// Hello, Morgan!


/** Return Function
 * The return statement exits the function and optionally sends a value back to the caller.
 * If a function does not explicitly return a value, it returns undefined by default.
 * Once return is executed, the function stops running — code after return inside the function won't run.
 */
function add(a, b) {
  return a + b;  // Returns the sum of a and b
}

let result = add(5, 3);
console.log(result);  // Output: 8

//Return Stops Execution
function testReturn() {
  console.log("Before return");
  return 42;              // Function exits here
  console.log("After return"); // This line NEVER runs
}

console.log(testReturn());
// Output:
// Before return
// 42

//Function Without Return Return Undefined
function sayHello() {
  console.log("Hello!");
}

let result2 = sayHello(); // Calling sayHello which doesn't return anything explicitly
console.log(result2);     // Output: undefined because no return value

//return object or array
function createUser(name, age) {
  return {
    name: name,
    age: age
  };
}

let user = createUser("Srijan", 25);
console.log(user); 
// Output: { name: "Srijan", age: 25 }

//Function Expression
/**A function expression is when you assign a function to a variable or constant. Unlike function declarations, 
 * function expressions can be anonymous and are not hoisted, 
 * meaning they cannot be used before they are defined. */
const variableName = function([parameters]) {
  // function body
};
 // basic Function expression
const greet1 = function(name) {
  console.log("Hello, " + name + "!");
};

greet1("Srijan");  // Output: Hello, Srijan!


//Named Function Expression
const factorial = function fact(n){
    if (n<=1) return 1;
    return n*fact(n-1);
};
console.log(factorial(4))
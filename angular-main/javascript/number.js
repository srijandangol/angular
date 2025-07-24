// Number
/** 
 * JavaScript has a single number type: Number.
 * It represents both integers and floating-point values. 
 */

let x = 42;       // integer
let y = 3.14;     // floating-point

console.log("x =", x);  // Output: x = 42
console.log("y =", y);  // Output: y = 3.14


// Parsing Numbers (Converting Strings to Numbers)

/** 
 * parseInt()
 * Parses a string and returns an integer (whole number).
 * Ignores trailing non-numeric characters after number.
 * Syntax: parseInt(string, radix)
 */
console.log(parseInt("123"));      // 123
console.log(parseInt("123abc"));   // 123
console.log(parseInt("abc123"));   // NaN (not a number)
console.log(parseInt("10", 2));    // 2 (binary "10" converted to decimal 2)


/** 
 * parseFloat()
 * Parses a string and returns a floating-point number.
 */
console.log(parseFloat("3.14"));    // 3.14
console.log(parseFloat("3.14abc")); // 3.14


/** 
 * Number() 
 * Converts a value to a number. Returns NaN if conversion fails.
 */
console.log(Number("123"));       // 123
console.log(Number("123.45"));    // 123.45
console.log(Number("abc"));       // NaN


// NaN
/** 
 * NaN is a special numeric value that means "Not a Number".
 * It is the result of an invalid or undefined mathematical operation.
 */
console.log(Number("abc"));       // NaN
console.log(parseInt("abc"));     // NaN
console.log(0 / 0);               // NaN
console.log(Math.sqrt(-1));       // NaN


// Important facts about NaN:

// NaN is of type number:
console.log(typeof NaN);          // "number"

// NaN is not equal to anything, including itself:
console.log(NaN === NaN);         // false

// To check if a value is NaN, use:

let value1 = "hello";
let value2 = NaN;

console.log(isNaN(value1));       // true (because "hello" cannot be converted to number)
console.log(isNaN(value2));       // true (value2 is NaN)
console.log(Number.isNaN(value1)); // false ("hello" is not the number NaN itself)
console.log(Number.isNaN(value2)); // true (value2 is exactly NaN)

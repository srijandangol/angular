/** =======================
 *     JavaScript Strings
 * ======================= */

// Basic string declaration
let text = "b cw cciwebdwjknc wiuebdwkjc wedjnwiuebiwj";

// length — Returns the number of characters in a string
let length = text.length;
console.log(length); // Output: 44

// charAt() — Returns the character at a specified index
let char = text.charAt(41);
console.log(char); // Output: 'b' (character at index 41)

// concat() — Joins (concatenates) two or more strings
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3); // Output: "Hello World"

// slice() — Extracts part of a string from a specified index
let text4 = "Apple, Banana, Kiwi";
let part = text4.slice(7); // Start from index 7 to the end
console.log(part); // Output: "Banana, Kiwi"

// indexOf() — Returns the first occurrence index of a substring, or -1 if not found
console.log(text.indexOf('wiuebdwkjc')); 
// Output: 20

// search() — Similar to indexOf but supports regular expressions
console.log(text.search('cciwebdwjknc')); 
// Output: 5

// lastIndexOf() — Returns the last occurrence index of a specified value
let text5 = "Hello planet earth, you are a great planet.";
let result = text5.lastIndexOf("earth");
console.log(result); // Output: 20


/** ==========================
 *     match() with RegExp
 * ========================== */

let text6 = "The rain in SPAIN stays mainly in the plain";

// match() — Returns an array of matches or null if no match

let result1 = text6.match("ain");
console.log(result1);
// Output: [ 'ain', index: 5, input: '...', groups: undefined ]

let result2 = text6.match(/ain/);
console.log(result2);
// Output: Same as above, first match only, because no global flag

let result3 = text6.match(/ain/g);
console.log(result3);
// Output: [ 'ain', 'ain', 'ain' ] — case-sensitive (misses "AIN" in "SPAIN")

let result4 = text6.match(/ain/gi);
console.log(result4);
// Output: [ 'ain', 'AIN', 'ain', 'ain' ] — case-insensitive global match


/** ========================
 *     includes()
 * ======================== */
// includes() — Checks if a string contains a substring (case-sensitive)

let message = "Hello, how are you?";
console.log(message.includes("how"));     // true
console.log(message.includes("bye"));     // false
console.log(message.includes("Hello", 0)); // true (starts from index 0)


/** ========================
 *  Template Literals (` `)
 * ======================== */

// Embedding variables using ${}
let name = "Srijan";
let message1 = `Hello, ${name}!`;
console.log(message1); // Output: Hello, Srijan!

// Expressions inside template strings
let a = 5;
let b = 10;
console.log(`The sum of ${a} and ${b} is ${a + b}`); 
// Output: The sum of 5 and 10 is 15

// Substitutions — Any valid JavaScript expression can be embedded
let a1 = 3, b1 = 4;
let result6 = `The sum is ${a1 + b1}`;
console.log(result6); // Output: The sum is 7

let name1 = "Srijan";
let greeting = `Hello, ${name1}!`;
console.log(greeting); // Output: Hello, Srijan!

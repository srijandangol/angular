"use strict";
function greet(name, id) {
    console.log(`Welcome, ${name} and your id is ${id}`);
}
greet("John", 11);
const greet1 = (name, age) => {
    return `hey ${name}, your age is ${age}`;
};
console.log(greet1("ram", 29));
const isPalindrome = (palin) => {
    let myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
};
console.log(isPalindrome("123321"));
//# sourceMappingURL=function.js.map
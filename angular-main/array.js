/** =====================
 *     JavaScript Arrays
 * ===================== */

// Declaring arrays
const arr = ["BMW", "volvo", "audi"];
const arr2 = ["Banana", "Orange", "Apple", "Mango"];
const arr3 = ["Robin", "Morgan"];

// concat() — Combines arrays into a new one
const arr4 = arr.concat(arr2, arr3);
// arr4 = ["BMW", "volvo", "audi", "Banana", "Orange", "Apple", "Mango", "Robin", "Morgan"]

// Assigning a value at a specific index
arr[8] = "Everest"; // Adds "Everest" at index 8 (creates empty slots from index 3 to 7)

// Accessing array element by index
console.log(arr[2]); 
// → Output: "audi"

// toString() — Converts array to comma-separated string
console.log(arr.toString());
// → Output: "BMW,volvo,audi,,,,,,Everest"

// concat() — Combines arrays
console.log(arr.concat(arr2));
// → Output: combines arr and arr2 into a new array

console.log(arr.concat(arr2, arr3));
// → Output: combines all three arrays into a new array

// copyWithin(target, start)
console.log(arr2.copyWithin(2, 0));
// → Output: ["Banana", "Orange", "Banana", "Orange"]

// slice(start, end) — Extracts part of the array
console.log(arr4.slice(0, 5));
// → Output: ["BMW", "volvo", "audi", "Banana", "Orange"]

/** =============================
 * Looping through an array
 * ============================= */

// Get the length of array `arr`
let arrLength = arr.length;

// Initialize a string to store output
let text = "";

// Loop through each item in the array and add to text
for (let i = 0; i < arrLength; i++) {
    text += arr[i] + "<br>"; // "<br>" used for HTML-style output
}

console.log(text);
// Output:
// BMW<br>volvo<br>audi<br>undefined<br>undefined<br>undefined<br>undefined<br>undefined<br>Everest<br>


// entries()
//Returns a new Array Iterator object with [index, value] pairs.
const array=["a","b"];
for (const[index, value] of array.entries()){
    console.log(index, value); // 0 "a", 1 "b"
}

//every()
//Checks all element pass a test
const nums = [10,20,30,40];
const allAboves5 = nums.every(nums => nums >5)
console.log(allAboves5)

//fill()
//fill elements with a static value
const filled = new Array(3).fill("a");
console.log(filled)

//filter()
//returns a new array with elements that pass a test
const num1 = [1,2,3,4,5];
const even = num1.filter(n => n % 2 ===0);
const odd = num1.filter(n => n % 2 ===1);
console.log(even)
console.log(odd)

//find()
//returns the first element that passes a test
const results = num1.find(n => n>2);
console.log(results)

//findindex()
//return the index of the first element that passes a test
const index = nums.findIndex(n => n > 10)
console.log(index)

//foreach
//calls a functoin for each array element
arr0=[1,2,3];
const number= arr0.forEach(n=>console.log(n*2));

//join()
//join elements into a string
const join = arr0.join("-");
console.log(join)

//keys
//Returns an iterator of keys (indexes).

const fruits = ["Banana", "Orange", "Apple", "Mango"];
//Create an iterable
const list = fruits.keys();
//list the keys
let keytext = "";
for(let x of list){
    keytext+= x + "<br>";
}
console.log(keytext)

//maps
/**create a new array from calling a function for every element
 * doenot execute the function for empty elements
 * does not change the original array
 */

const numbers = [1,2,3,4,5]
const newArr = numbers.map(Math.sqrt)
console.log(newArr)

//pop()
//Removes and returns the last element.
console.log(numbers.pop())

//Push()
//Add a element to the  end
console.log(num1.push(6))


//reduce()
//redduce the array to single value
const reduces = num1.reduce((acc, curr)=> acc+curr,0);
console.log(reduces)


//reverse()
//reverse the array in-place
const reverse = num1.reverse();
console.log(reverse)

//shift()
//removes and returs the first element
const arrshift = [1,2,3,4,5]
console.log("array shift: " + arrshift.shift());
console.log("array after shift: " + arrshift)

//unshift
//add elements to the start of the array
const arrUnshift = [1,2,3,4,5]
console.log( arrUnshift.unshift(6));
console.log("array after unshift: " + arrUnshift)

//toLocalString(O)
// converrts a number, date or array into a localized string representationbased on the user's locale and oprional formatting options

//number
const number1 = 1234567.89;

console.log(number1.toLocaleString());           // e.g., "1,234,567.89" in en-US
console.log(number1.toLocaleString("de-DE"));    // "1.234.567,89" in German format
console.log(number1.toLocaleString("hi-IN"));    // "12,34,567.89" in Indian format

//with options
console.log(number1.toLocaleString("en-US", {
  style: "currency",
  currency: "USD"
})); // "$9,876,543.21"

console.log(number1.toLocaleString("ja-JP", {
  style: "currency",
  currency: "JPY"
})); // "￥9,876,543"

//Dates
const date = new Date();
console.log(date.toLocaleString());
console.log(date.toLocaleString("ko-KR"));
console.log(date.toLocaleString("hi-IN"));

//with array
const arr5 = [1,2,3,4,5]
console.log(arr5.toLocaleString())

/**
 * | Type   | Purpose                          | Example Output (en-US)  |
| ------ | -------------------------------- | ----------------------- |
| Number | Localized number or currency     | `1,234.56`, `$1,234.56` |
| Date   | Localized date/time              | `7/21/2025, 3:15:30 PM` |
| Array  | Comma-separated localized string | `"1,2,3,4,5"` |

 */

//values()
const item = ["a","b","c"]
for (const val of item.values()){
    console.log(val);
}

/**
 * | Method             | Description                           |
| ------------------ | ------------------------------------- |
| `concat()`         | Combines arrays                       |
| `copyWithin()`     | Copies part of array within itself    |
| `slice()`          | Extracts a sub-array                  |
| `entries()`        | Iterator of \[index, value]           |
| `every()`          | Checks if all elements pass test      |
| `fill()`           | Fills array with static value         |
| `filter()`         | Filters based on condition            |
| `find()`           | Finds first match                     |
| `findIndex()`      | Finds index of first match            |
| `forEach()`        | Iterates and executes callback        |
| `join()`           | Joins elements into a string          |
| `keys()`           | Returns keys (indexes)                |
| `map()`            | Creates new array with function       |
| `pop()`            | Removes last item                     |
| `push()`           | Adds item to end                      |
| `reduce()`         | Reduces array to single value         |
| `reverse()`        | Reverses array                        |
| `shift()`          | Removes first element                 |
| `unshift()`        | Adds element to beginning             |
| `toLocaleString()` | Localized string of number/date/array |
| `values()`         | Iterator of values                    |

 */
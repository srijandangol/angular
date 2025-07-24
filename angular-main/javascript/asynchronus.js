//Asynchronus
/**Asynchronous programming allows JavaScript to perform long-running operations (like fetching data from a server) without blocking the execution of other code.
 * JavaScript is single-threaded — it can do one thing at a time.
If an operation takes time (like a network request), it can freeze the whole application.
*/

//Callbacks
/**A function passed into another function that runs after the task is completed */
function greet(name, callback){
    console.log("Hello, " + name);
    callback();
}
function sayBye(){
    console.log("Goodbye!");
}
greet("John", sayBye)
/**sayBye is passed as a callback to greet.
Once greet prints "Hello, John", it calls the callback, which logs "Goodbye!". */


//Async and Await 
/**used in js to simplify handling asynchronus operation using promises
 * A modern and cleaner way to write asynchronous code using promises.
 * It makes asynchronous code look synchronous.
 * 
 * SYNTAX
 * async function functionName() {
  try {
    const result = await someAsyncFunction();
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
 */

//ASYNC FUNCTION
/**
 * allows us to write promise-based code as if it were synchronus.
 * ensure that the execution thread is not blocked
 * it always return a promise
 * 
 * syntax
 * async function myFunction() {
  return "Hello";
}
 */

const getData = async () => {
    let data = "Hello World";
    return data;
}
getData().then(data => console.log(data))
/**async functions always return a promise.
Even though you're returning a string "Hello World", it's wrapped inside a resolved promise.
So, calling getData() returns a Promise that resolves to "Hello World". */



// Await Keyword
/**
 * used to wait for he promise to resolve
 * it can ony be used within an async block
 * it makes the code wait until the promise returnn a result, allowing for cleaner and more manageable async code
 */

const getData1 = async () => {
    let x = await "Hello World";
    console.log(x)
}
console.log(1);
getData();
console.log(2);
/**await is used to wait for a promise to resolve.
When you do await "Hello World", it's automatically converted to Promise.resolve("Hello World") behind the scenes.
The code pauses at the await line until the promise is resolved. */


//Promise
/**
 * make handling asynchronous operations like API calls, file loading, or time delays easier
 * Think of a Promise as a placeholder for a value that will be available in the future. It can be in one of three states
        Pending: The task is in the initial state.
        Fulfilled: The task was completed successfully, and the result is available.
        Rejected: The task failed, and an error is provided.
 */
/**SYntax
 * let promise = new Promise((resolve, reject) => {
    perform async operation
    if(operationSuccessful){
    resolve("Task Successful");
    }else{
        reject("Task Failed");
    }
    });
 */
/**creating a new Promise. A promise takes a function with two arguments:
resolve – to send a success message
reject – to send an error/failure message */
let checkEven = new Promise((resolve, reject) => {//
    let number = 4;
    if (number % 2 ===0 ) resolve("the number is even!");
    else reject("the nuber is odd!");
});
/**.then() is used to handle the success (resolve) — it logs the message.
.catch() is used to handle failure (reject) — it logs the error. */
checkEven
    .then((message) => console.log(message))
    .catch((error) => console.error(error))


/**setTimeout, clearTimeout, setInterval
 * 
 *  | Method           | Purpose                           | Runs How Often?      | Cancel With       |
    | ---------------- | --------------------------------- | -------------------- | ----------------- |
    | `setTimeout()`   | Runs a function **after a delay** | **Once** after delay | `clearTimeout()`  |
    | `clearTimeout()` | **Stops** a pending timeout       | —                    | —                 |
    | `setInterval()`  | Runs a function **repeatedly**    | **Every** interval   | `clearInterval()` |

 */

// setTimeout: once after 2 seconds
let timeoutID = setTimeout(() => {
  console.log("This runs once after 2s");
}, 2000);

// clearTimeout: cancels the above
clearTimeout(timeoutID);

// setInterval: runs every 1 second
let intervalID = setInterval(() => {
  console.log("Runs every second");
}, 1000);

// clearInterval: stops after 5 seconds
setTimeout(() => {
  clearInterval(intervalID);
  console.log("Interval stopped");
}, 5000);

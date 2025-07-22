//errors
/**Throw, Try....Catch....FInally
 * 
 * The try statement defines a code block to run (to try).
   The catch statement defines a code block to handle any error.
   The finally statement defines a code block to run regardless of the result.

   try {
  // risky code
    } catch (error) {
    // error handler
    } finally {
    // always runs
    }

   The throw statement defines a custom error. The throw statement is used to manually trigger an error.
 */

function divide(a,b){
    if(b===0){
        throw new Error("Cannot bre divided by zero")
    }
    return a/b;
}
try{
    let result = divide(3,0);
    console.log("results: ", result);
}catch(err){
    console.log("results: ", err.message);
}finally{
    console.log('Fisnished attemping')
}

/**| Keyword   | Purpose                                |
| --------- | -------------------------------------- |
| `throw`   | Triggers a manual error                |
| `try`     | Defines a block to run that might fail |
| `catch`   | Handles the error if it occurs         |
| `finally` | Always runs after `try`/`catch`        |
*/

/**
 * | Error Type       | When it Happens                                     |
| ---------------- | --------------------------------------------------- |
| `EvalError`      | Error with `eval()` (rare today)                    |
| `RangeError`     | Number out of range (e.g., invalid array length)    |
| `ReferenceError` | Variable not defined                                |
| `SyntaxError`    | Invalid JavaScript code syntax                      |
| `TypeError`      | Wrong type (e.g., calling function on undefined)    |
| `URIError`       | Bad encoding in URI functions                       |
| `AggregateError` | Multiple errors in one (Promises)                   |
| `InternalError`  | JS engine internal limit exceeded (e.g., recursion) |

 */
//conditions and comparision

//if statements

let age = 4;
if (age >= 20){
    console.log("you are an adult")
}

//if... else statement
if (age <= 30){
    console.log("youth")
}
else{
    console.log("adult")
}

//if ... else if statement

if (age<=18){
    console.log("teenager");
}
else if (age >=18 && age <= 59){
    console.log("adult")

  
}  
else{
        console.log('old')
    }


//ternary operator
/**syntax
 * condition ? expression_if_true : expression_if_false
 */

let age1 = 18
let resut = (age1>=18) ? "adult" : "minor"
console.log(resut)


//Switch Condition

/**
 * The switch statement is used to perform different actions based on different conditions.
 * Syntax
 * switch (expression){
 * case 1:
 * ....
 * break;
 * case2:
 * ......
 * breal;
 * default:
 * .....
 * }
 */

let fruits = "Apple"

switch(fruits){
    case "Apple":
        console.log("apple")
        break;
    case "banana":
        console.log("banana")
        break;
    default:
        console.log("unknown")
}


/**
 * ========Comparision====== 
 */
/**| Operator | Description           | Example     | Result  |
| -------- | --------------------- | ----------- | ------- |
| `==`     | Equal (loose)         | `5 == "5"`  | `true`  |
| `===`    | Equal (strict)        | `5 === "5"` | `false` |
| `!=`     | Not equal (loose)     | `5 != "5"`  | `false` |
| `!==`    | Not equal (strict)    | `5 !== "5"` | `true`  |
| `>`      | Greater than          | `10 > 5`    | `true`  |
| `<`      | Less than             | `10 < 5`    | `false` |
| `>=`     | Greater than or equal | `10 >= 10`  | `true`  |
| `<=`     | Less than or equal    | `10 <= 5`   | `false` |
 */
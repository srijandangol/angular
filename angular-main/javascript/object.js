//object
// an object is a fundamental data type that stores related data and functionality as key-value pairs, 
// where keys are strings or Symbols and values can be any data type, including functions. 
// Objects have properties (key-value pairs) and methods (functions as properties). 
// They are dynamic, allowing properties to be added, changed, or removed anytime. 
// The simplest way to create an object is using the object literal syntax with curly braces {}

//examples
const person = {
    name: "john doe",
    age: 24,
    greet(){
        console.log(`hello, my name is ${this.name}` )
        //this refers to the current object (person in this case).
        // //Without this, JavaScript looks for a variable named name in the local or global scope, not the object.
    }
};
person.greet();


//Object Methods
//Object methods are functions that are stored as properties of an object. They allow the object to perform actions using its own data.
const car = {
  brand: "Toyota",
  start() {
    console.log(`${this.brand} is starting...`);
  }
};

car.start(); // Output: Toyota is starting...

//start is a method of the car object.
// this.brand refers to the brand property of the same object.

//Object assign ()
//method copies the properties from one or more source object to a target object
/**
 * Syntax
Object.assign(target, source(s))
 */

const target = { a: 1 };
const source = { b: 2 };
const source1 = { b: 2 };
const source2 = { b: 2 };

const result = Object.assign(target, source, source1, source2);//All sources have the same key: b, with the same value: 2, so it doesn't matter which one comes last — the value remains 2.
// //output{ a: 1, b: 2 }

console.log(result);

/**------------------------------------------------ */
const target1 ={a:1};
const source3 = {b:2};
const source4 = {c:3};
const source5 = {d:4};

const result1 = Object.assign(target1, source3, source4, source5);
//Object.assign() copies all enumerable own properties from source, source1, and source2 into target.
// It modifies the target object in-place and returns it.
console.log(result1)// { a: 1, b: 2, c: 3, d: 4 }


const result2 = Object.assign({}, target, source, source1, source2);
// the target already had a property with the same key, it would be overwritten.
// The target object is changed.
//  If you want to keep it unchanged, you should pass an empty object as the first argument:

/**-------------------------------------------------- 
 * Object Create 
 * Create an object from an existing object
 * syntax
 * Object.create(object, properties)
 * */

const person1 = {
    firstName: "John",
    lastName: "Doe"
};
//creating a new object
const person2 = Object.create(person1);
person2.firstName = "jonny"
person2.lastName = "moa"

console.log(person1.firstName + person1.lastName + " and " + person2.firstName + person2.lastName )

//-----------------------------------------------------------------------------
/**Object Entries() 
 * Returns an array of [key, values] pairs
 * Syntax
 * Object.entries(object)
*/

const obj = { name: "Robin", age: 22 };
console.log(Object.entries(obj)); 

const fruits = {apple: 300, mango: 400}
let text = "";
for (let [ fruit, amount] of Object.entries(fruits)){
    text += fruit + ": " + amount + "<br>";
}
console.log(text)

//-------------------------------
/**Object freeze()
 * Freezes an object - prevents adding, removing, updating properties
 */
const user = {name: "John"};
Object.freeze(user)
user.name = "Alex";
console.log(user.name);

//----------------------------------------------------------------

/**Object hasOwn()
 * CHeck if the object has its own preperty
 * Syntax:
Object.hasOwn(obj, prop)
obj: This is the JavaScript object on which the check is to be applied
prop: It is the property on which the check is to be applied
 */

const detail = {
    name: "john doe",
    course: "MERN"
};

console.log(Object.hasOwn(detail, 'name'));
console.log(Object.hasOwn(detail, 'age'))

//------------------------------------------
/**boject has own property()
 * to check own properties
 * SYntax
 * obj.hasOwnProperties(props)
 */
const obj1 = { b: 2 };
console.log(obj1.hasOwnProperty("b")); // true


//-------------------------------------------
/**Object keys() 
 * returnns an array of keys
*/

const obj2 = { x: 10, y: 20 };
console.log(Object.keys(obj2)); // ["x", "y"]

/**
 * | Method                              | Description                                                             |
| ----------------------------------- | ----------------------------------------------------------------------- |
| `Object.defineProperty()`           | Adds/modifies a single property with descriptors.                       |
| `Object.defineProperties()`         | Adds/modifies multiple properties.                                      |
| `Object.getOwnPropertyDescriptor()` | Returns descriptors for a property.                                     |
| `Object.getOwnPropertyNames()`      | Gets all own property names (even non-enumerable).                      |
| `Object.getPrototypeOf()`           | Gets the prototype of an object.                                        |
| `Object.setPrototypeOf()`           | Sets the prototype of an object.                                        |
| `Object.preventExtensions()`        | Prevents new properties from being added.                               |
| `Object.isFrozen()`                 | Checks if an object is frozen.                                          |
| `Object.isSealed()`                 | Checks if an object is sealed.                                          |
| `Object.seal()`                     | Seals the object: no adding/removing properties, but values can change. |

 */
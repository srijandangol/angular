//loop

//1. for loop
/**use to repeat the block of code for fixed number of times 
 * 
 * Syntax
 * for (initialization; condition; increment){code}
*/

for (let i = 0; i<=10; i++){
    let n = i+1;
    console.log("n: ", n)
}

//do....while loop
/**used to exit a lopp immediately when a condition is met 
 * 
 * Syntax
 * 
 * do{
 * code
 * }while(condition);
*/
let j=0;
do{
    console.log("count: ", j);
    j++
}while(j<3);



//for ... in statement
const person = {name: "ALex", age:20};
for (let key in person){
    console.log(key + ": " + person[key])
}

const people = [
  { name: "Alex", age: 20 },
  { name: "John", age: 30 },
  { name: "Alex1", age: 40 },
  { name: "John1", age: 50 }
];

for (let index in people) {
  console.log("Person " + index + ":");
  console.log("Name: " + people[index].name);
  console.log("Age: " + people[index].age);
}


// for ... of statement
const color = ["red", "green",' blue'];
for (let colour of color){
    console.log(colour)
}

for (let chr of "JS Angular"){
    console.log(chr)
}
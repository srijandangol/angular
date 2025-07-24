function greet(name:string, id:number){
    console.log(`Welcome, ${name} and your id is ${id}`)
}
greet("John", 11)


const greet1 = (name:string, age:number):string => {
    return `hey ${name}, your age is ${age}`
}
console.log(greet1("ram", 29));


const isPalindrome = (palin:string):boolean =>{
    let myPalin = palin.split("").reverse().join("");
    return myPalin ===palin
}
console.log(isPalindrome("123321"))
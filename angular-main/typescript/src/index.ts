// function sum(a:number,b:number){
//     return a+b
// }
// console.log(sum(2,4))

// let myFavNum:number = 10;
// console.log(myFavNum)

// let a:string = "john"
// let b:string = 'doe'
// console.log(a+b)

// function isEven(a:number):boolean{
//     return a%2 ===0
// }
// console.log(isEven(6))

async function fetchData(): Promise<unknown>{
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}

async function processData(){
    const response = await fetchData();
    if (typeof response === "object"){
        console.log(response)
    }
}
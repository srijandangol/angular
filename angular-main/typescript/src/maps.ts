const num: number[] = [1,2,3,4,5];

const newNum:number[] = num.map((curVal: number) => curVal * 2)
console.log(newNum)
console.log(num)

const numberToString = num.map((curEle:number) => curEle.toString())
console.log(numberToString)
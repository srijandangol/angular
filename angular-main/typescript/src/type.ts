type Person ={
    name:string;
    age:number;
    address: {
        city:string;
        country:string
    }
}

const person: Person = {
    name:'John Doe',
    age:22,
    address: {
        city:"ajsb",
        country:'nepal'
    }
}

console.log(person.name)

const person1: Person ={
    name: 'sam sam',
    age: 33,
    address: {
        city: "aud",
        country: 'india'
    }
}
console.log(person1.name, person1.address.country, person1.age)


type Product ={
    name: string,
    price: number,
    quantity: number
}

const product: Product = {
    name: 'smartphone',
    price: 16000,
    quantity: 2
}
const calculatePrice = (product: Product) => {
    return `total cost of ${product.name} = ${product.price * product.quantity} `
}
console.log(calculatePrice(product))
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
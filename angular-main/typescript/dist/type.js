"use strict";
const person = {
    name: 'John Doe',
    age: 22,
    address: {
        city: "ajsb",
        country: 'nepal'
    }
};
console.log(person.name);
const person1 = {
    name: 'sam sam',
    age: 33,
    address: {
        city: "aud",
        country: 'india'
    }
};
console.log(person1.name, person1.address.country, person1.age);
const product = {
    name: 'smartphone',
    price: 16000,
    quantity: 2
};
const calculatePrice = (product) => {
    return `total cost of ${product.name} = ${product.price * product.quantity} `;
};
console.log(calculatePrice(product));
//# sourceMappingURL=type.js.map
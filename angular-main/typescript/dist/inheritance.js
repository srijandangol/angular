"use strict";
class Parents {
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `Hellom i'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")}`;
    }
}
const parents1 = new Parents("John", 30, ["Travelling", "Hiking", "painting"]);
console.log(parents1.introduce());
class Child extends Parents {
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce() {
        return `${super.introduce()}. I'm in grade ${this.grade}`;
    }
}
const child1 = new Child("miles", 14, ["Football", "Hiking"], 10);
console.log(child1.introduce());
//# sourceMappingURL=inheritance.js.map
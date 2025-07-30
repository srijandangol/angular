//Parents class
class Parents {
    name: string;
    age: number;
    hobbies: string[];

    constructor(name: string, age: number, hobbies: string[]){
        this.name =  name;
        this.age = age;
        this.hobbies = hobbies;
    }

    introduce(): string{
        return `Hellom i'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")}`
    }
}

const parents1: Parents = new Parents("John",30, ["Travelling", "Hiking", "painting"])

console.log(parents1.introduce())

//child class
class Child extends Parents{
    grade: number;

    constructor(name: string, age: number, hobbies: string[], grade:number){
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduce():string {
        //  return `Hellom i'm ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join(", ")}. I'm in grade ${this.grade}`
         return `${super.introduce()}. I'm in grade ${this.grade}`
    }
}
const child1: Parents = new Child("miles",14, ["Football", "Hiking"], 10)
console.log(child1.introduce())
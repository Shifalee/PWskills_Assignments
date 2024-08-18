/*Problem 1

Create an object constructor Person that takes name and age as parameters and initializes them. Also, add
a method sayHello to greet the person.*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to greet the person
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Example usage:
const person2 = new Person("Bob", 30);
person2.sayHello(); // Output: Hello, my name is Bob and I am 30 years old.

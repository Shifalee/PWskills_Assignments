/*Problem 2

Create a constructor Employee that inherits from the Person constructor of problem
 1. Add an additional property designation and a method getDetails to display the 
 employee details.*/

 // Define the Person class from Problem 1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Define the Employee class that inherits from Person
class Employee extends Person {
    constructor(name, age, designation) {
        // Call the parent class constructor to initialize name and age
        super(name, age);
        this.designation = designation; // Add the designation property
    }

    // Method to display the employee's details
    getDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`);
    }
}

// Example usage:
const employee1 = new Employee("Bob", 30, "Software Engineer");
employee1.sayHello(); 
employee1.getDetails(); 



/*
Problem 3
Create an object Calculator with methods add, subtract, multiply, and divide. Demonstrate the usage of this
within these methods such that method chaining of add, subtract, multiply and divide is possible.*/

class Calculator {
    constructor() {
        this.value = 0;
    }

    // Method to add a number
    add(number) {
        this.value += number;
        return this; // Return the Calculator object for chaining
    }

    // Method to subtract a number
    subtract(number) {
        this.value -= number;
        return this; // Return the Calculator object for chaining
    }

    // Method to multiply by a number
    multiply(number) {
        this.value *= number;
        return this; // Return the Calculator object for chaining
    }

    // Method to divide by a number
    divide(number) {
        if (number !== 0) {
            this.value /= number;
        } else {
            console.log("Error: Division by zero is not allowed.");
        }
        return this; // Return the Calculator object for chaining
    }

    // Method to get the current value
    getResult() {
        return this.value;
    }

    // Method to reset the calculator
    reset() {
        this.value = 0;
        return this; // Return the Calculator object for chaining
    }
}

// Example usage:
const calc = new Calculator();

const result = calc.add(10)
    .subtract(2)
    .multiply(4)
    .divide(2)
    .getResult();

console.log(result); // Output: 16

// Resetting and performing another calculation
const newResult = calc.reset()
    .add(20)
    .divide(4)
    .getResult();

console.log(newResult); // Output: 5

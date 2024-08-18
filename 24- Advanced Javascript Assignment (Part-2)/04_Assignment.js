/*
Problem 4
Define a base class Shape with a method draw. Create two subclasses Circle and Rectangle that override
the draw method. Demonstrate polymorphism using instances of these classes.*/

class Shape {
    // Method to be overridden by subclasses
    draw() {
        console.log("Drawing a shape.");
    }
}
class Circle extends Shape {
    // Overriding the draw method
    draw() {
        console.log("Drawing a circle.");
    }
}
class Rectangle extends Shape {
    // Overriding the draw method
    draw() {
        console.log("Drawing a rectangle.");
    }
}
// Creating instances of the subclasses
const shape1 = new Circle();
const shape2 = new Rectangle();

// Polymorphism in action
shape1.draw(); // Output: Drawing a circle.
shape2.draw(); // Output: Drawing a rectangle.

// Using a single reference type to handle multiple object types
const shapes = [new Circle(), new Rectangle(), new Circle()];

shapes.forEach(shape => {
    shape.draw(); // Calls the appropriate draw method depending on the actual object type
});



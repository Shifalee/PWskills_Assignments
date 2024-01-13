/*Write a program in JavaScript to calculate the area of a circle given its radius value of 10. Use
appropriate arithmetic operators.*/

const radius = 10; // Radius of the circle
// Calculate the area of the circle: area = π * radius^2
const pi = Math.PI; // Approximate value of pi
const area = pi * Math.pow(radius, 2);
console.log("Area of the circle:", area);
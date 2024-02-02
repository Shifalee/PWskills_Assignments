/*Create an arrow function called square that takes a number as an argument and returns its square.
use the arrow function to calculate the square of a given number and display the result.*/

const square=(number)=>{
    return number*number;
    
};
const inputNumber=5;
const result=square(inputNumber);
console.log(`The square of ${inputNumber} is: ${result}`);

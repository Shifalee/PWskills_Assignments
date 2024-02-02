/*Write a javascript function called factorial that calculate the factorial of non negative integer
using recursion.Test the function with different inputs.*/

function factorial(n){
    if(n===0 ||n===1){
        return 1;
    }
    return n*factorial(n-1)

}
const input1 = 0;
const input2 = 5;
const input3 = 8;

console.log(`Factorial of ${input1}: ${factorial(input1)}`);
console.log(`Factorial of ${input2}: ${factorial(input2)}`);
console.log(`Factorial of ${input3}: ${factorial(input3)}`);
/*Write a javascript function called curry that takes a function as an argument and return a curried
version of the function.The curried function should accept the arguments one at a time and return a new
function until all arguments are provided.Then,it should execute the original function with all arguments.
Test a curry function with a function that adds two numbers.*/

// Curry function
function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        // If all arguments are provided, execute the original function
        return fn(...args);
      } else {
        // If not all arguments are provided, return a new curried function
        return function (...nextArgs) {
          return curried(...args, ...nextArgs);
        };
      }
    };
  }
  
  // function to add two numbers
  function addNumbers(a, b) {
    return a + b;
  }
  
  // Curry the addNumbers function
  const curriedAdd = curry(addNumbers);
  
  // Test curried function with different inputs
  const result1 = curriedAdd(3)(4); 
  const result2 = curriedAdd(5, 2); 
  
  console.log(`Result 1: ${result1}`); 
  console.log(`Result 2: ${result2}`);
  
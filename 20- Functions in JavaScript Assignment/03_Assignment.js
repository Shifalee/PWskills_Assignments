//Create an IIFE that calculate a square of a number and immediately display a result.

(function() {
    
    const numberToSquare = 7;
    const result = ((num) => num * num)(numberToSquare);
    console.log(`The square of ${numberToSquare} is: ${result}`);
  })();
  
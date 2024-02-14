/*Write a JavaScript function called outerFunction that takes a parameter and returns an inner function. The inner function should access both the parameter of outerFunction and a variable declared within outerFunction.Demonstrate how lexical scoping allows the inner function to maintain access to these variables even after outerFunction has finished executing.*/


function outerFunction(param) {
    // Variable declared within outerFunction
    var innerVariable = "Inner variable";

    // Inner function accessing both parameter and innerVariable
    function innerFunction() {
        console.log("Parameter of outerFunction:", param);
        console.log("Variable declared within outerFunction:", innerVariable);
    }

    // Returning the inner function
    return innerFunction;
}

// Call outerFunction with a parameter
var innerFunc = outerFunction("Outer parameter");

// Call the inner function
innerFunc();

/*Create a JavaScript program that demonstrates the basic usage of regular expressions. Write a function that takes a regex pattern and a string as input and returns true if there is a match,and false otherwise.Test the function with various patterns and strings.*/


function isMatch(pattern, str) {
    // Creating a regular expression object with the provided pattern
    var regex = new RegExp(pattern);

    // Testing the string against the regular expression
    return regex.test(str);
}

// Test with various patterns and strings
console.log(isMatch('hello', 'hello world'));
console.log(isMatch('\\d+', '12345'));
console.log(isMatch('\\w+', 'Hello123'));
console.log(isMatch('apple', 'banana')); 
console.log(isMatch('^start', 'start of something'));
console.log(isMatch('end$', 'end of something')); 

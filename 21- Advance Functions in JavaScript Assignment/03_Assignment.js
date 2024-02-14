/*Write a JavaScript program that demonstrates the use of character classes in regular expressions.Create a function that searches for specific character classes in a given string and returns the matches.Test the function with patterns for digits,uppercase letters,lowercase letters and special characters.*/


function findCharacterClasses(str) {
    // Define character class patterns
    var digitPattern = /\d/g; 
    var uppercasePattern = /[A-Z]/g;
    var lowercasePattern = /[a-z]/g; 
    var specialCharPattern = /[^A-Za-z0-9]/g;

    // Find matches for each character class
    var digits = str.match(digitPattern) || [];
    var uppercaseLetters = str.match(uppercasePattern) || [];
    var lowercaseLetters = str.match(lowercasePattern) || [];
    var specialChars = str.match(specialCharPattern) || [];

    // Return matches for each character class
    return {
        digits: digits,
        uppercaseLetters: uppercaseLetters,
        lowercaseLetters: lowercaseLetters,
        specialChars: specialChars
    };
}

// Test the function with a sample string
var sampleString = "Hello World! 123";
var matches = findCharacterClasses(sampleString);

// Output the matches
console.log("Digits:", matches.digits);
console.log("Uppercase Letters:", matches.uppercaseLetters);
console.log("Lowercase Letters:", matches.lowercaseLetters);
console.log("Special Characters:", matches.specialChars);

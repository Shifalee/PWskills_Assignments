/*Create a JavaScript program that takes a regex pattern and a string as input.Write a function that not only checks if there is a match but also extracts specific parts of the matched text using groups.Test the function with patterns that include groups to capture different parts of a date(e.g. day,month,and year)from a given string.*/


function matchAndExtract(pattern, str) {
    // Creating a regular expression object with the provided pattern
    var regex = new RegExp(pattern);

    // Executing the regular expression against the string
    var match = regex.exec(str);

    // If there is a match
    if (match) {
        // Extracting specific parts using groups
        var groups = {};
        for (var i = 1; i < match.length; i++) {
            groups[`group${i}`] = match[i];
        }
        return groups;
    } else {
        // No match found
        return null;
    }
}

// Test with patterns to extract parts of a date
var dateStr = "Today's date is 2024-02-14";
var datePattern = /(\d{4})-(\d{2})-(\d{2})/; // Pattern to capture year, month, and day

var extractedDate = matchAndExtract(datePattern, dateStr);
console.log("Extracted Date:", extractedDate);

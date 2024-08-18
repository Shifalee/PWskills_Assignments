/*Problem 5


Create a simple polyfill for the Array.includes method by the name of customIncludes*/

// Creating a polyfill for Array.includes called customIncludes
if (!Array.prototype.customIncludes) {
    Array.prototype.customIncludes = function(element, fromIndex = 0) {
        // Handle negative fromIndex values
        let start = fromIndex < 0 ? Math.max(this.length + fromIndex, 0) : fromIndex;

        // Loop through the array starting from the computed index
        for (let i = start; i < this.length; i++) {
            // Check for the element (using strict equality)
            if (this[i] === element) {
                return true;
            }
        }
        return false;
    };
}

// Example usage:
const arr = [1, 2, 3, 4, 5];

console.log(arr.customIncludes(3)); // Output: true
console.log(arr.customIncludes(6)); // Output: false
console.log(arr.customIncludes(3, 3)); // Output: false (starts search from index 3)
console.log(arr.customIncludes(4, -2)); // Output: true (starts search from index 3 due to negative index)

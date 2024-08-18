/*2. The following is an array of 10 students ages:
=> const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
1. Sort the array and find the min and max age.
2. Find the median age(one middle item or two middle items divided by two.
3. Find the average age(all items divided by number of items.
4. Find the range of the ages(max minus min)
5. Compare the value of (min - average) and (max - average), use abs() method */

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// 1. Sort the array and find the min and max age.
ages.sort((a, b) => a - b);
const minAge = ages[0];
const maxAge = ages[ages.length - 1];

console.log("Sorted Ages:", ages);
console.log("Min Age:", minAge);
console.log("Max Age:", maxAge);

// 2. Find the median age (one middle item or two middle items divided by two).
const middle = Math.floor(ages.length / 2);
let medianAge;
if (ages.length % 2 === 0) {
    medianAge = (ages[middle - 1] + ages[middle]) / 2;
} else {
    medianAge = ages[middle];
}

console.log("Median Age:", medianAge);

// 3. Find the average age (all items divided by number of items).
const sumAges = ages.reduce((acc, age) => acc + age, 0);
const averageAge = sumAges / ages.length;

console.log("Average Age:", averageAge);

// 4. Find the range of the ages (max minus min).
const ageRange = maxAge - minAge;

console.log("Range of Ages:", ageRange);

// 5. Compare the value of (min - average) and (max - average), use abs() method.
const minMinusAverage = Math.abs(minAge - averageAge);
const maxMinusAverage = Math.abs(maxAge - averageAge);

console.log("Min - Average:", minMinusAverage);
console.log("Max - Average:", maxMinusAverage);

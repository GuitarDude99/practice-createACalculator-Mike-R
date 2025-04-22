/*Instructions
Scenario: You are building a calculator for an online math game. The
calculator must include functionality to perform the following:

Absolute Value Calculation: Given any number, return its absolute
value.

Power Calculation: Calculate and return the value of a base raised to
a specific power.

Square Root Finder: Calculate the square root of a number.

Maximum and Minimum Finder: From a given set of numbers,
determine the largest and smallest values.

Random Number Generator: Generate a random integer within a
specified range.

Custom Rounding: Round a number to a specified number of decimal
places.

Step-by-Step Tasks:
1. Write a function for each operation listed above using the Math
2. 3. 4. module.

Test each function with sample inputs to ensure it works as intended.
Combine the individual functions into a single "calculator" program
where the user can select an operation and input the required values.
Test the calculator by performing the following:

Find the absolute value of -45.67.

Raise 5 to the power of 3.

Calculate the square root of 144.

Determine the largest and smallest values from [3, 78,
-12,
0.5, 27].

Generate a random number between 1 and 50.
1

Round 23.67891 to 2 decimal places.*/


//Absolute Value Calculator:

function absoluteValue(num) {
    return Math.abs(num);

}

//Power Calculator:
function power(base, exponent) {
    return Math.pow(base, exponent);
}

//Square Root Calculator:
function squareRoot(num) {
    return Math.sqrt(num);
}

//Maximum and Minimum Finder:
function maxMinFinder(numbers) {
    return {
        max: Math.max(...numbers),
        min: Math.min(...numbers)
    };
}

//Random Number Generator:
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Custom Rounding:
function customRound(num, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
}



//Test Cases:

console.log("Absolute Value of -45.67:", absoluteValue(-45.67)); // 45.67

console.log("5 raised to the power of 3:", power(5, 3)); // 125

console.log("Square root of 144:", squareRoot(144)); // 12

const numbers = [3, 78, -12, 0.5, 27];

const { max, min } = maxMinFinder(numbers);
console.log("Maximum value:", max); // 78
console.log("Minimum value:", min); // -12

console.log("Random number between 1 and 50:", randomNumber(1, 50)); // Random number between 1 and 50

console.log("23.67891 rounded to 2 decimal places:", customRound(23.67891, 2)); // 23.68




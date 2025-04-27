// Readline Sync for User Input in Calculator

const readlineSync = require('readline-sync');
  

//Absolute Value:

function absoluteValue(num) {
    return Math.abs(num);

}

//Power:

function power(base, exponent) {
    return Math.pow(base, exponent);
}

//Square Root:

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


//Combine the individual functions into a single "calculator" program swhere the user can select an operation and input the required values.
//So, we need to combine all the functions into a single calculator function, accept user input, and display it to the user



function calculator(){
    let operation = readlineSync.questionInt('Select number for desired mathematical operation\n' +
            "1. Absolute Value\n" +
            "2. Power Calculation\n" +
            "3. Square Root\n" +
            "4. Max and Min Finder\n" +
            "5. Random Number\n" +
            "6. Custom Rounding\n" +
            "0. Exit\n"
        
    );


console.log("you chose " + operation);
if (operation === 1) {
let numbers = readlineSync.questionInt('Input numbers for operation ')
    console.log(absoluteValue(numbers))
}

if (operation === 2) {
    let base = readlineSync.questionInt('Input base for operation ')
    let expo = readlineSync.questionInt('Input exponent for operation ')
    console.log(power(base, expo))
}

if (operation === 3) {
let numbers = readlineSync.questionInt('Input numbers for operation ')
    console.log(squareRoot(numbers))
}

if (operation === 4) {
    const input = readlineSync.question('Enter numbers seperated by spaces: ')
    console.log(maxMinFinder(input))
}
//How come this knew input was a number and not a string??
//And how come it isn't an array?

if (operation === 5) {
    let minimum = readlineSync.questionInt('Input numbers for min ')
    let maximum = readlineSync.questionInt('Input numbers for max ')
    console.log(randomNumber(minimum, maximum))
}
    


if (operation === 6) {
    let input = readlineSync.question('Input non-whole number ');
  
    let float = parseFloat(input);
    console.log(customRound(float, 2))

}


}

calculator()


//TEST

//Absolute Value of -45.67
//Console Output: 45

// 5 to the 3rd power
//Console Output: 125

//Square Root of 144
// Console Output: 12

// Largest and Smallest Values: 3, 78, -12, 0.5, 27
// Console Output: Max; Nan Min Nan
// Does not want to recognize negatives? But why is 78 not identified as max??

// Generate Random Number between 1 and 50
//Console Output: 38

// Round 23.67891 to 2 Decimal Places
// Console Output: 23.68

//Everything works correctly but Max/Min Finder.....But why isn't it recognizing and returning numbers....??
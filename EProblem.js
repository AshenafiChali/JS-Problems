 //QUESTION 1
 function printHelloWorld() {
  console.log("Hello, World!");
}
// Calling the function to print "Hello, World!"
printHelloWorld();
//QUESTION 2
function addNumbers(num1, num2) {
    return num1 + num2;
  }
  
  // Example usage:
  let result = addNumbers(80, 123);
  console.log("The sum is: " + result); // Output will be 203
  //question 3

  function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Example usage:
console.log(checkEvenOrOdd(7)); // Output will be "Odd"
console.log(checkEvenOrOdd(12)); // Output will be "Even"
//Question 4
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const alphanumericStr = str.toLowerCase().replace(/[\W_]/g, '');
    
    // Reverse the string
    const reversedStr = alphanumericStr.split('').reverse().join('');
    
    // Check if the original and reversed strings are the same
    return alphanumericStr === reversedStr;
  }
  
  // Example usage:
  console.log(isPalindrome("racecar")); // Output will be true
  console.log(isPalindrome("hi")); // Output will be false
  //Question 5
  function getArrayLength(arr) {
    return arr.length;
  }
  
  // Example usage:
  const array = [1, 2, 3, 4, 5,];
  console.log("The length of the array is: " + getArrayLength(array)); // Output will be 5
  //Question 6
  function getRandomNumber(min, max) {
    // Generate a random number between min and max (inclusive of both)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Example usage:
  let minimumValue = 4;
  let maximumValue = 10;
  
  let randomNum = getRandomNumber(minimumValue, maximumValue);
  console.log("Random number between " + minimumValue + " and " + maximumValue + " is: " + randomNum);
  //Question 7
  function roundNumberToDecimalPlaces(number, decimalPlaces) {
    return Number(number.toFixed(decimalPlaces));
  }
  
  // Example usage:
  let originalNumber = 3.14159;
  let roundedNumber = roundNumberToDecimalPlaces(originalNumber, 2);
  console.log("Original number: " + originalNumber + ", Rounded to 2 decimal places: " + roundedNumber);
  //Question 8
  function calculateSquareRoot(number) {
    return Math.sqrt(number);
  }
  
  // Example usage:
  let num = 16;
  let squareRoot = calculateSquareRoot(num);
  console.log("Square root of " + num + " is: " + squareRoot); // Output will be 4
 // Question 9
 function sumOfDigits(number) {
  if (number < 0 || !Number.isInteger(number)) {
    return "Please provide a positive integer.";
  }

  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }

  return sum;
}

// Example usage:
//const num = 12345;
//const result = sumOfDigits(num);
console.log(`The sum of digits of ${num} is: ${result}`);
//Question 10
function countVowels(str) {
  // Convert the string to lowercase to simplify comparison
  const lowerCaseStr = str.toLowerCase();

  // Define the regular expression pattern for vowels
  const vowelPattern = /[aeiou]/g;

  // Match the vowels in the string using the pattern and count the occurrences
  const vowelMatches = lowerCaseStr.match(vowelPattern);

  // Return the count of vowels
  return vowelMatches ? vowelMatches.length : 0;
}

// Example usage:
const inputString = "Gezahagn and Ashenafi";
const vowelCount = countVowels(inputString);
console.log("Number of vowels:", vowelCount);
//question 11.

function getStringLength(str) {
  return str.length;
}

// Example usage:
const myString = "hello, world!";
const lengthOfString = getStringLength(myString);
console.log("Length of the string:", lengthOfString); // Output: Length of the string: 13
//question 12
function convertToUpperCase(str) {
  return str.toUpperCase();
}

// Example usage:
let lowercaseString = "akkam, ashenafi";
let uppercaseString = convertToUpperCase(lowercaseString);
console.log(uppercaseString); // Output will be: "AKKAM ASHENAFI!"
//question 13
function checkSubstring(str, substring) {
  return str.includes(substring);
}

// Example usage:
let mainString = "This is nathan and bethany";
let subString = "nathan and bethany";

if (checkSubstring(mainString, subString)) {
  console.log(`The string "${mainString}" contains the substring "${subString}"`);
} else {
  console.log(`The string "${mainString}" does not contain the substring "${subString}"`);
}
//question 14
function replaceAllOccurrences(mainString, substringToReplace, replacementSubstring) {
  return mainString.split(substringToReplace).join(replacementSubstring);
}

// Example usage:
let originalString = "This is Nathan. he is my son.";
let substringToReplace = "is";
let replacementSubstring = "was";

let modifiedString = replaceAllOccurrences(originalString, substringToReplace, replacementSubstring);
console.log(modifiedString);

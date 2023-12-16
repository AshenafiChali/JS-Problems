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
const myString = "hello, Ashenafi!";
const lengthOfString = getStringLength(myString);
console.log("Length of the string:", lengthOfString); // Output: Length of the string: 16
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
//question 15
function removeWhitespace(str) {
  return str.replace(/\s/g, '');
}

// Example usage:
let stringWithWhitespace = 'This is a number one world group';
let stringWithoutWhitespace = removeWhitespace(stringWithWhitespace);
console.log(stringWithoutWhitespace); // Output: "Thisisanumberoneworldgroup"
//question 16
function filterOutNegativeNumbers(numbers) {
  return numbers.filter(number => number >= 0);
}

// Example usage:
let numbersArray = [5, -3, 10, -8, 0, 7, -2];
let filteredArray = filterOutNegativeNumbers(numbersArray);
console.log(filteredArray); // Output: [5, 10, 0, 7]
//question 17
function getObjectKeys(obj) {
  return Object.keys(obj);
}

// Example usage:
let sampleObject = {
  name: 'John',
  age: 30,
  email: 'john@example.com',
  address: '123 Main St'
};

let keysArray = getObjectKeys(sampleObject);
console.log(keysArray); // Output: ["name", "age", "email", "address"]
//question 18
function addDefaultName(obj) {
  if (!obj.hasOwnProperty('name') || obj.name === '' || obj.name === undefined || obj.name === null) {
    obj.name = 'unknown';
  }
  return obj;
}

// Example usage:
let person1 = {
  age: 25,
  gender: 'male'
};

let person2 = {
  name: '',
  age: 30,
  gender: 'female'
};

let person3 = {
  name: null,
  age: 28,
  gender: 'non-binary'
};

let updatedPerson1 = addDefaultName(person1);
let updatedPerson2 = addDefaultName(person2);
let updatedPerson3 = addDefaultName(person3);

console.log(updatedPerson1); // Output: { age: 25, gender: 'male', name: 'unknown' }
console.log(updatedPerson2); // Output: { name: 'unknown', age: 30, gender: 'female' }
console.log(updatedPerson3); // Output: { name: 'unknown', age: 28, gender: 'non-binary' }
//question 19
function incrementNumber(number) {
  return number + 1;
}

// Example usage:
let myNumber = 10;
let incrementedNumber = incrementNumber(myNumber);
console.log(incrementedNumber); // Output will be 11
//Question 20
function multiplyByThree(number) {
  return number * 3;
}

// Example usage:
let inputNumber = 5;
let result1 = multiplyByThree(inputNumber);
console.log("Result:", result1); // Output will be 15
//question 21
function getFirstElement(numbersArray) {
  if (Array.isArray(numbersArray) && numbersArray.length > 0) {
    return numbersArray[0];
  } else {
    return undefined; // Return undefined if the array is empty or not provided
  }
}

// Example usage:
let numbers = [20, 25, 30, 40, 50];
let firstElement = getFirstElement(numbers);
console.log("First Element:", firstElement); // Output will be 20
//question 22
function calculatePoints(twoPointers, threePointers) {
  // Calculate total points: 2 points for each 2-pointer and 3 points for each 3-pointer
  const totalPoints = (2 * twoPointers) + (3 * threePointers);
  return totalPoints;
}

// Example usage:
let twoPointersScored = 8;
let threePointersScored = 5;
let finalPoints = calculatePoints(twoPointersScored, threePointersScored);
console.log("Final Points:", finalPoints); // Output will be 31
//question 23
function isSumLessThan30(num1, num2) {
  // Calculate the sum of the two numbers
  let sum = num1 + num2;

  // Check if the sum is less than 30
  if (sum < 30) {
    return true; // Return true if the sum is less than 30
  } else {
    return false; // Return false if the sum is greater than or equal to 30
  }
}

// Example usage:
let number1 = 15;
let number2 = 10;
let result2 = isSumLessThan30(number1, number2);
console.log("Is the sum less than 30?", result2); // Output will be true
//question 24
function isEqual(num1, num2) {
  return num1 === num2;
}

// Example usage:
console.log(isEqual(5, 5));  // Output will be: true
console.log(isEqual(5, 10)); // Output will be: false

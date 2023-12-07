 //QUESTION 1
 console.log('Hello, World!'); 
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
  console.log(isPalindrome("hello")); // Output will be false
  //Question 5
  function getArrayLength(arr) {
    return arr.length;
  }
  
  // Example usage:
  const array = [1, 2, 3, 4, 5];
  console.log("The length of the array is: " + getArrayLength(array)); // Output will be 5
  //Question 6
  function getRandomNumber(min, max) {
    // Generate a random number between min and max (inclusive of both)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Example usage:
  let minimumValue = 10;
  let maximumValue = 20;
  
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
  if (typeof str !== 'string') {
    return 'Please provide a valid string.';
  }

  // Convert the string to lowercase to make the matching case-insensitive
  str = str.toLowerCase();

  // Define a regular expression to match vowels
  const vowelRegex = /[aeiou]/g;

  // Use match() with the vowelRegex to find all occurrences of vowels in the string
  const vowelsArray = str.match(vowelRegex);

  // If there are no vowels found, return 0
  if (!vowelsArray) {
    return 0;
  }

  // Return the count of vowels
  return vowelsArray.length;
}

// Example usage:
const inputString = "Hello, how are you?";
const vowelCount = countVowels(inputString);
console.log(`The number of vowels in "${inputString}" is: ${vowelCount}`);
//Question 11
function stringLength(str) {
  if (typeof str !== 'string') {
    return 'Please provide a valid string.';
  }

  return str.length;
}

// Example usage:
const inputString = 'Hello, world!';
const length = stringLength(inputString);
console.log(`The length of the string "${inputString}" is: ${length}`);

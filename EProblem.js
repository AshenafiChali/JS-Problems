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
  
  
//  q1 Print all numbers from 1 to N

// const n=Number(prompt('enter number'))

// const printNumber=(n)=>{
// if(!isNaN(n)&&n>0&&n!==null){
//     for(let i=1;i<=n;i++){
// console.log(i)
//     }
// }else{
//     console.log('invalid input')
// }
// }
// printNumber(n)

// q2 Print the sum of the first N natural numbers
// const input=Number(prompt("enter number for sum upto n natural numbers"))
// const sumOfNaturalNumbers=n=>{
// if(n>0&n!==null){
//    if (Number.isInteger(n) && n > 0) {
//     const sum = (n * (n + 1)) / 2;
//     console.log(`Sum of first ${n} natural numbers is: ${sum}`);
//   } 
// }else{
//     console.log('invalid input')
// }
// }
// sumOfNaturalNumbers(input)
// q3 Print the factorial of a number N
// const input=Number(prompt("enter number for factorial"))
// const factorial=n=>{
//     if(n>0&&n!==null){
//         const fact=1;
//         i=n;
//         while(i>0){
// fact*=i;
// i--;
//         }
//         console.log(`Factorial of ${n} is: ${fact}`);

//     }else{
//         console.log('invalid input')
//     }
// }
// factorial(input)

//  q4 Reverse the digits of a number
// const input = prompt("Enter a positive integer to reverse:");

// const reverseNumber = (value) => {
//   const n = Number(value);

//   if (!Number.isInteger(n) || n <= 0) {
//     console.log("Invalid input. Please enter a positive integer.");
//     return;
//   }

//   let reversed = 0;
//   let temp = n;

//   while (temp > 0) {
//     const rem = temp % 10;
//     reversed = (reversed * 10) + rem;
//     temp = Math.floor(temp / 10);
//   }

//   console.log(`Reversed number of ${n} is: ${reversed}`);
//   return reversed;
// };

// reverseNumber(input);
// q5 Check if a number is a palindrome
// const input = prompt("Enter a number to check if it's a palindrome:");

// const isPalindrome = (value) => {
//  let n = Number(value);

//   if (!Number.isInteger(n) || n < 0) {
//     console.log("Invalid input. Please enter a non-negative integer.");
//     return false;
//   }

//   let original = n;
//   let reversed = 0;

//   while (n > 0) {
//     const rem = n % 10;
//     reversed = (reversed * 10) + rem;
//     n = Math.floor(n / 10);
//   }

//   if (reversed === original) {
//     console.log(`${original} is a palindrome.`);
//     return true;
//   } else {
//     console.log(`${original} is not a palindrome.`);
//     return false;
//   }
// };

// isPalindrome(input);
// q6 Find the number of digits in a number
// const input = prompt("Enter a non-negative integer to count its digits:");

// const countDigits = (value) => {
//   const n = Number(value);

//   // Validation
//   if (!Number.isInteger(n) || n < 0 || Number.isNaN(n)) {
//     console.log("Invalid input. Please enter a non-negative integer.");
//     return;
//   }

//   let evenCount = 0;
//   let oddCount = 0;
//   let primeCount = 0;
//   let temp = n;

//   const isPrimeDigit = (digit) => {
//     return digit === 2 || digit === 3 || digit === 5 || digit === 7;
//   };

//   while (temp > 0) {
//     const digit = temp % 10;

//     if (digit % 2 === 0) {
//       evenCount++;
//     } else {
//       oddCount++;
//     }

//     if (isPrimeDigit(digit)) {
//       primeCount++;
//     }

//     temp = Math.floor(temp / 10); // remove last digit
//   }

//   console.log(`Even digits: ${evenCount}`);
//   console.log(`Odd digits: ${oddCount}`);
//   console.log(`Prime digits: ${primeCount}`);
// };

// countDigits(input);

// q7 drew egyptian pyramid

// let n = Number(prompt('Enter Number of rows'));
// let star = "*";
// let space = "_";

// if (n > 1 && !isNaN(n)) {
//   for (let i = 1; i <= n; i++) {
//     let line = "";

//     // Print leading spaces
//     for (let s = 1; s <= n - i; s++) {
//       line += space+" ";
//     }

//     // Print stars
//     for (var j = 1; j <= 2 * i - 1; j++) {
//       line += star;
//     }

//     console.log(line);
//   }
// } else {
//   console.log("Invalid input. Enter number of rows from 2 to n");
// }
// draw myname first letter "s"
// let rows = 5;

// if (isNaN(rows) || rows < 5) {
//   console.log('Invalid input. Please enter a number >= 5');
// } else {
//   printS(rows);
// }

// function printS(rows) {
//   let mid = Math.ceil(rows / 2);

//   for (let i = 1; i <= rows; i++) {
//     let line = "";

//     for (let j = 1; j <= rows; j++) {
//       if (
//         i === 1 ||             // Top row
//         i === rows ||          // Bottom row
//         i === mid              // Middle row
//       ) {
//         line += "*";
//       } else if (i < mid && j === 1) {
//         line += "*";           // Upper vertical line (left side)
//       } else if (i > mid && j === 1) {
//         line += "*";           // Lower vertical line (right side)
//       } else {
//         line += " ";
//       }
//     }

//     console.log(line);
//   }
// }

// q8 print y

// const printY=(number)=>{
 
//   let star="*"
//   let space=" "
//   let middle=Math.ceil(number/2)
// for(i=1;i<=number;i++){
//     let line=""
//   for(j=1;j<=number;j++){

// if (i < middle) {
//   if (j === i || j === number - i + 1) {
//     line += "*";
    
//   } else {
//     line += " ";
//   }
// } else {
//   if (j == Math.ceil(number / 2)) {
//     line += "*";
//   } else {
// //     line += " ";
// //   }
// // }


    

//   }
// console.log(line)
// }
// }

// let number=Number(prompt('enter number of rows'));
// if (isNaN(number) || number < 3 || number % 2 === 0) {
//   console.log('Invalid input. Please enter an **odd number** greater than or equal to 3');
// } else {
//   printY(number);
// }



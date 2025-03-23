// // q1
// let power=(a=2,b=2)=>{
//  let basedPowRaise
//    switch(b){
//    case 1:
//    basedPowRaise= a*a;
//    break;
//     case 2:
//        basedPowRaise= a*a;
//       break;  
//     case 3:
//        basedPowRaise= a*a*a;
//       break;  
//     case 4:
//        basedPowRaise= a*a*a*a;
//       break;  
//     case 5:
//        basedPowRaise= a*a*a*a*a;
//       break;  
//     case 6:
//        basedPowRaise= a*a*a*a*a*a;
//       break;  
//     case 7:
//        basedPowRaise= a*a*a*a*a*a*a;
//       break;  
//     case 8:
//        basedPowRaise= a*a*a*a*a*a*a*a;
//       break;  
//     case 9:
//        basedPowRaise= a*a*a*a*a*a*a*a*a;
//       break;  
//     case 10:
//        basedPowRaise= a*a*a*a*a*a*a*a*a*a;
//       break;  

//    }
//    return basedPowRaise
// }
// console.log(power(2,10))
// q2
// let leap_years = [2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 
//     2044, 2048, 2052, 2056, 2060, 2064, 2068, 2072, 2076, 2080, 
//     2084, 2088, 2092, 2096];

// let inputYear = document.getElementById("input");

// inputYear.addEventListener("keypress", (event) => {
//     if (event.key === "Enter") {  // ✅ Correct key event
//         let year = parseInt(inputYear.value);  // ✅ Convert input to number

//         let matchYear = leap_years.find((leapYear) => leapYear === year); // ✅ Using find()

//         if (matchYear) {
//             console.log(`${year} is a leap year! ✅`);
//         } else {
//             console.log(`${year} is NOT a leap year ❌`);
//         }
//     }
// });
// q3;



// area of triangle
// const areaOfTriangle = () => {
//     return sum(28, 12, 19);  // ✅ Correctly passing arguments
// };

// function sum(a, b, c) {
//     let s = (a + b + c) / 2;  // ✅ Correct formula for semi-perimeter
//     return areas(s, a, b, c);  // ✅ Pass a, b, c to areas()
// }

// function areas(s, a, b, c) {
//     let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));  // ✅ Use Math.sqrt()
//     return area;
// }

// // Calling the function
// console.log("Area of Triangle:", areaOfTriangle());

// q4
// let n;  // Global variable to store count of subjects

// let mainFun = (total) => {
//     let totalSum = sum(98, 76, 54, 85, 92);  // ✅ Can now take any number of subjects
//     let percent = percentage(totalSum, total);  // ✅ Calculate percentage
//     let meanOrAvg = totalSum / n;  // ✅ Compute mean after `n` is set

//     return { meanOrAvg, percent };  // ✅ Return an object for clarity
// };

// function sum(...subjects) {  // ✅ Use rest operator to accept any number of subjects
//     let totalSum = subjects.reduce((acc, curr) => acc + curr, 0);  // ✅ Sum all numbers
//     n = subjects.length;  // ✅ Set `n` to count of subjects
//     return totalSum;
// }

// function percentage(sum, total) {
//     return (sum / total) * 100;
// }

// console.log(mainFun(500));  // ✅ Correct function call
// q5
// arr=[213,244,"hhasd",true];
// function IndexOf(element){
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]==element){
//         return i;
//     }else{
//         return -1;
//     }
    
// }
// }
// console.log(IndexOf(213))
// q6
// let sentence = `Now it correctly calculates mean and percentage for any number of subjects! 🚀
// Would you like me to make it interactive, where users can input values? `;

// let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// let newSent = sentence
//     .split(" ")  // ✅ Split sentence into words
//     .map(word => 
//         word.split("").filter(letter => !vowels.includes(letter)).join("") // ✅ Remove vowels
//     )
//     .join(" ");  // ✅ Join words back into a sentence

// console.log(newSent);

// // q7
// let words = ["Apple", "Orange", "Banana"];
// let vowels = { a: 0, e: 0, i: 0, o: 0, u: 0, A: 0, E: 0, I: 0, O: 0, U: 0 };

// words.forEach((word) => {
//   word.split("").forEach(letter => {
//     if (vowels.hasOwnProperty(letter)) {
//       vowels[letter]++;  // Increase count of vowel
//     }
//   });
// });

// console.log(vowels);
// q8
// let input=document.getElementById("input")
// input.addEventListener("keydown",(event)=>{
// if(event.key=="Enter"){
//     let inputVal=input.value;
//     if(!inputVal){
//         alert("Please enter a value");
//     }
//  let   distanceInFeet=feet(inputVal);
//  let   distanceInCentimeters=centimeters(inputVal);
//  let   distanceInInches=inches(inputVal);

//  console.log("feet",distanceInFeet)
//  console.log("Inches",distanceInInches)
//  console.log("centimeters",distanceInCentimeters)
// }
// })
// function feet(inputVal){
//     let feets=inputVal*3280.84;
//     return feets;
// }
// function centimeters(inputVal){
//     let cent=inputVal*100000;
//     return cent;
// }
// function inches(inputVal){
//     let inch=inputVal*3937008;
//     return inch;
// }
// q9
// const standardHours = 40;
// const overtimeRate = 12; 
// let overTimePaidOfWeek=(hours)=>{

//     if(hours>standardHours){
//         let overTimeHours=hours-standardHours;
//         let overTimePay=overTimeHours*overtimeRate;
//         return ` overtime pay ${overTimePay} RS of this week`;
//     }else if(hours==standardHours){
//         return  `not overtime you have ${standardHours} hours` ;
//     }else{
//         return `you have ${hours} hours that not match with weekly work hours` ;
//     }
    

// }
// console.log(overTimePaidOfWeek(40))
// q10
// let input=document.getElementById("input")
// input.addEventListener("keydown",(event)=>{
//     if(event.key=="Enter"){
//         let inputVal=input.value;
//        currencyNotesDenomination(inputVal)
//     }
// })
// const currencyNotesDenomination=(inputVal)=>{

//     if (inputVal % 10 !== 0) {
//         console.log("Please enter an amount in multiples of 10.");
//         return;
//     }

//     let notes100 = Math.floor(inputVal / 100);
//     let remaining = inputVal % 100;

//     let notes50 = Math.floor(remaining / 50);
//     remaining %= 50;

//     let notes10 = Math.floor(remaining / 10);

//     console.log(`100 Rs Notes: ${notes100}`);
//     console.log(`50 Rs Notes: ${notes50}`);
//     console.log(`10 Rs Notes: ${notes10}`);

// }

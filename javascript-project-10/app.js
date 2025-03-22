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


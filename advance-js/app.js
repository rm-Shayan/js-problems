// // Classes in js practices
// class Student {
//     constructor(grade) {
//         this.grade = grade;
//     }
// }

// class Person extends Student {
//     constructor(name, age, grade) {
//         super(grade);
//         this.name = name;
//         this.age = age;
//     }

//     getPersonDetails() {
//         return `Hi, my name is ${this.name}, I am ${this.age} years old, and I'm in grade ${this.grade}.`;
//     }

//     static isAdult(age) {
//         return age >= 18; // simplified
//     }
// }

// // ✅ Call the static method on the right class
// console.log(Person.isAdult(17)); // false
// console.log(Person.isAdult(21)); // true

// class BankAccount {
//     #balance;  // Private field
//     constructor(balance) {
//         this.#balance = balance;
//     }

//     getBalance() {
//         return this.#balance;
//     }

//     deposit(dep) {
//         if (dep > 0) {
//             this.#balance += dep;
//         }
//         return this.#balance;
//     }
// }

// const account = new BankAccount(140000);
// console.log(account.deposit(20008)); // Output: 160008
// // Trying to access #balance outside the class will throw an error
// console.log(account.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class


// class Person {
//     static defaultName = "shayan";  // More meaningful static name

//     constructor(name) {
//         this._name = name || Person.defaultName;  // Use defaultName if no name is provided
//     }

//     get getName() {
//         return this._name;
//     }

//     set setName(name) {
//         this._name = name.toUpperCase();  // Set name as uppercase
//     }
// }

// const person2 = new Person();  // No name passed, will use defaultName
// console.log(person2.getName);  // Output: shayan

// person2.setName = 'rao';  // This sets the name using the setter (uppercase transformation)
// console.log(person2.getName);  // Output: RAO

// Track how many Person instances have been created using a static counter.

// class instanceCounter{
//     static count=0;
//     constructor(name){
// this.person=name;
//        instanceCounter.count++

//     }
//  static   getCount(){
//         return instanceCounter.count
//     }
// }
// let p1=new instanceCounter("shayan")

// let p2=new instanceCounter("shayan")

// console.log(p1)
// console.log(instanceCounter.count)


// class Person {
//     static count = 0;  // Static property to track the number of instances

//     constructor(name) {
//         this._name = name || "shayan";  // Default name if no name is provided
//         Person.count++;  // Increment the static count each time a new instance is created
//     }

//     get getName() {
//         return this._name;
//     }

//     set setName(name) {
//         this._name = name.toUpperCase();
//     }

   
// }

// const person1 = new Person("John");
// const person2 = new Person("Alice");
// const person3 = new Person();

// console.log(Person.getCount());  // Output: 3 (since 3 instances were created)

// class Counter {
//     count = 0;
//     increment = () => {
//         this.count++;
//         console.log(this.count);
//       };
//   }
//   const c = new Counter();
//   console.log(c)
//   setTimeout(new Counter().increment, 1000); // Why doesn’t it work?
  
// object literal 
// let name = "Sara", age = 25;
// const obj={
//     name,age
// }
// console.log(obj);
// let key = "score";
// let obj={
// [key]:568
// }
// console.log(obj.score)
// const obj = {
//     greet(name = "there") {
//       return `Hello, ${name}!`;
//     }
//   };
// let a = { x: 1 }, b = { y: 2 };
// let merge={...a,...b}
// console.log(merge)
// const user = {
//     name: "John",
//     address: { city: "Paris", country: "France" }
//   };
  
//   // Destructure with renaming
//   let { name: userName, address: { city, country } } = user;
  
//   console.log(userName); // "John"
//   console.log(city);     // "Paris"
//   console.log(country);  // "France"
// import * as math from './math.js';
// console.log(math)
// import greetuser from "./math.js";
// console.log(greetuser())
// let btn = document.getElementById("btn");

// btn.addEventListener("click", async () => {
//   const module = await import("./lazyModule.js"); // ✅ use import("...")
//   const { AchiWeb } = module;                     // ✅ destructure after import
//  AchiWeb();                         // assuming AchiWeb is a function
 
// });
// main.js
// import { Car } from './lazyModule.js';  // Include the .js extension in the browser

// const myCar = new Car('Toyota', 'Corolla', 20000);
// console.log(myCar);


const showMessage=()=>{
    alert(`hi`)
    showMessage()
}

    document.addEventListener("DOMContentLoaded",showMessage())
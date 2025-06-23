// let shayan:string="jsks"
// console.log('shayan')

// const greet = (name: string): void => {
//   console.log(`Hello, ${name}!`);
// };

// greet("Shayan");

// // index.ts
// class Std {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   greet(): void {
//     console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
//   }
// }

// // Create an object (instance)
// const student1 = new Std("Shayan", 20);
// student1.greet(); // Output: Hello, my name is Shayan and I'm 20 years old.


// interface std {
//   name: string;
//   age: number;
//   school?: school;
// }

// interface school {
//   name: string;
//   phone: number;
// }

// let student: std = {
//   name: "Shayan",
//   age: 20,
//   school: {
//     name: "sjj", // ✅ Corrected property name
//     phone: 1234567890
//   }
// };

enum Size {
  Small = "S",
  Medium = "M",
  Large = "L"
}

// Log entire enum
console.log(Size);

// Access a specific value
console.log(Size.Medium); // Output: "M"

// let arr:string[] = ["ndjd"]; // ✅ OK

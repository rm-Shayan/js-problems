// chp 1-20
// chp1
// q1
// alert(`hello world`);
// q2
// alert(`password is not valid`)
// q3
// alert("Breaking the line\nis using JS");
// q4
// alert(`welcome to js land`);
// q5
// alert(`preventthis page to creating additional dialogues`);
// q6
// alert(`i can run js through my browser console`);
// q7
// alert(`welcome to our website`)
// chp2
// q1
// var userName;
// var myName='RAO MUHAMMAD SHAYAN'
// q2
// let message="hello world"
// alert(message)
// q3
// const stdName=`Rao Muhammad Shayan`;
// const age="19.6"
// const course='cerfied mobile and web app development'
// alert(`${stdName} \n ${age}\n ${course}`)
// q4
// let pizza="pizza"

// for(i=0;i<1;i++){
//    alert(`${pizza.slice(0,pizza.length-1)} \n ${pizza.slice(0,pizza.length-2) }\n ${pizza.slice(0,pizza.length-3)} \n ${pizza.slice(0,pizza.length-4)} `)
// }
// q5
// let email=prompt("enter your email ","xyz.com")
// alert(email)
// q6
// const Book=`A smarter way to learn js`
// alert(`i am trying to learn from ${Book}`)
// q7
// document.writeln(` yes i can write html  through js`)
// q8
// alert(`“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”`)
// chp3
// q1
// let age=20
// alert(age)
// q2
// window.addEventListener('load', () => {
//     let number = localStorage.getItem('visitCount');

//     // If it's the first time, initialize to 1
//     number = number ? parseInt(number) + 1 : 1;

//     // Save the updated count back to localStorage
//     localStorage.setItem('visitCount', number);

//     alert(`You have visited the website ${number} times`);
// });
// q3
// let myBirthYear=prompt("enter your birth year")
// alert(myBirthYear)
// q4
// document.getElementById("submit").addEventListener("click", () => {
//     // Get input values on click
//     let userName = document.getElementById("name").value;
//     let productName = document.getElementById("product").value;
//     let quantity = document.getElementById("quantity").value;

//     // Constructor to store details
//     function UserDetails(name, product, quantity) {
//         this.name = name;
//         this.product = product;
//         this.quantity = quantity;
//     }

//     // Get or initialize data
//     let storeData = JSON.parse(localStorage.getItem("userDetails")) || [];

//     // Add new entry
//     storeData.push(new UserDetails(userName, productName, quantity));
//     localStorage.setItem("userDetails", JSON.stringify(storeData));

//     // Display the list
//     let list = document.getElementById("list");
//     list.innerHTML = ""; // Clear old list before displaying new

//     storeData.forEach(element => {
//         list.innerHTML += `<li>Name: ${element.name}</li>`;
//         list.innerHTML += `<li>Product: ${element.product}</li>`;
//         list.innerHTML += `<li>Quantity: ${element.quantity}</li>`;
//     });
// });

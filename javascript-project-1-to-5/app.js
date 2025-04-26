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
// chp4
// q1
// var a=1,b=3,c="shayan";
// q2
// legeal
// let oscar='kdkk',oscar123='kwk',oscarParty="snkjsa",oscar_cake="kjdjd",oscar$js="jjds",
// illegeal
// let 34oscar='kdkk',oscar%^123='kwk',oscar Party="snkjsa",oscar-cake="kjdjd",123="jjds",
// const heading=document.querySelector(".head")
// heading.className=`text-teal-400 text-3xxl text-center m-auto`
// heading.innerHTML="Rules for naming JS variables"
// const h1=document.createElement("h1")
// h1.className=`text-teal-400 text-3xxl text-center `
// h1.innerHTML=`variable name can contain letters number(integer) and dollay sign and also undrscore`
// document.body.appendChild(h1)
// const h2=document.createElement("h1")
// h2.className=`text-teal-400 text-3xxl text-center `
// h2.innerHTML=` Variables must begin with a letter, underscore (_), or dollar sign ($)`
// document.body.appendChild(h2)
// const h3=document.createElement("h1")
// h3.className=`text-teal-400 text-3xxl text-center `
// h3.innerHTML=` Variables are case sensitive`
// document.body.appendChild(h3)
// const h4=document.createElement("h1")
// h4.className=`text-teal-400 text-3xxl text-center `
// h4.innerHTML=` Variables name should'nt js keyword and function()`
// document.body.appendChild(h4)
// chp5
// q1 /Q2
// let a = prompt(`Enter first number`);
// let b = prompt(`Enter second number`);
// let op=prompt(`opeeration`)
// let c = eval(`${a} ${op} ${b}`);
// alert(c);
// q3
// let number = 5; // You must define it first!

// document.body.innerHTML = `
// <h1>Initial value: ${number}</h1>
// <br><h1>Increment value: ${++number}</h1>
// <br><h1>Add 7 into previous value: ${(number += 7)}</h1>
// <br><h1>Decrement previous value: ${--number}</h1>
// <br><h1>Remainder value when divided by 3: ${(number %= 3)}</h1>
// `;
// q4
// let ticketPrice=600;
// alert(`price of 5 tickets is:${ticketPrice*5}`)
// q5
// for (let i = 4; i <= 4; i++) {
//     for (let j = 1; j <= 10; j++) {
//         document.body.innerHTML += `<h1 class="text-3xl text-teal-400 px-12 py-4">${i} x ${j} = ${i * j}</h1>`;
//     }
// }
// q5
// let celsius=prompt(`today temperature in celsius`);
// let farenheit=prompt(`today temp in  farenheit`);
// let c=((farenheit-32)*5/9)
// let f=((celsius*9/5)+32)
// alert(`${c} CELSIUS`)
// alert(` ${f}FARENEIT`)
// console.log("Ali Hassan")
// console.log(21)
// console.log("GCUF")
// console.log("Java Script")
// console.log("Pskistan")
//  console.log("Web Development")

// Introduction

// let Name = "Ali Hassan";
// let age = 21;
// let Univresty = "Gcuf";
// let CGPA = 3.65;
// const Degree = "CS";
// let Course = "Web Dev";
// let skills = "Html,Css,JS";
// let Smester = 6;
// const Gender = "Male";
// let Country = "Pkaistan";
// let City = "Kamalia";
// let District = "Toba Tekh Sing";
// let Province = "Punjab";
// let Hobby = "Cricket";
// Univresty="GCUF";

// console.log("Name: " + Name , typeof Name);
// console.log("CGPA: " + CGPA ,typeof CGPA);
// console.log("Age: " + age + " years" ,typeof age);
// console.log("Univresty: " + Univresty);
// console.log("Degree: " + Degree);
// console.log("Course: " + Course);
// console.log("Smester: " + Smester);
// console.log("Skills: " + skills);
// console.log("Gender: " + Gender);
// console.log("Country: " + Country);
// console.log("City: " + City);
// console.log("District: " + District);
// console.log("Province: " + Province);
// console.log("Hobby: " + Hobby);
// console.log('Univresty: '+ Univresty);

// Simple Calculator

// alert("Welcome to my Calculator!");
// var num1 = prompt("Entre First Number:");
// var num2 = prompt("Entre Second Number:");
// let sum= Number(num1) + Number(num2);
// let sub= num1-num2;
// let mul=num1*num2;
// let div=num1/num2;
// console.log('Num1:' + num1);
// console.log("Num2 " + num2);
// console.log("Sum: " + sum);
// console.log("Subtaction : " + sub);
// console.log("Multiply: " + mul);
// console.log("Division: " + div);

// Strings Litterals

// console.log(`My name is ${Name}. My age is ${age}. I am study in ${Univresty}. My degree is ${Degree}.I am learned a ${Course}. My semester is ${Smester}.My cgpa is ${CGPA}. I am expert in ${skills}. I lived in ${Country}. My hobby is ${Hobby} My province is ${Province}`);

// .length property
// let tweet=prompt("Entre your tweet");
// let tweetLength=tweet.length;
// console.log('You have written ' + tweetLength   + " character your remaining character is " + (140-tweetLength) );

// slice property

// let myName="Ali";
// let firstchar=myName.slice(0,1);
// console.log(firstchar);

// splice method
// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// fruits.splice(2,0, "Guava")
// console.log(fruits);

// touppercase

// let naam=prompt("Entre your name");
// let capital= naam.toUpperCase();
// console.log(capital);

// tolowercase

// let naam2 = prompt("Entre your name");
// let lower = naam2.toLowerCase();
// console.log(lower);


// capitilize first charater

// let name1 = prompt("Entre Your Name");
// let firstchar = name1.slice(0, 1);
// let upper = firstchar.toUpperCase();
// let rest = name1.slice(1, name1.length);
// rest = lower.toLowerCase();
// let capital = upper + lower;
// console.log(capital);


// If - else

// var number = prompt("Entre a Number:");
// if (number % 2 === 0) {
//     console.log(number + " is even.");
// } else {
//     console.log(number + " is odd.");
// }

// If-else -if

//  var number = prompt("Entre Your Marks");
//  if(number>=68 && number<=80)
//  {
//     console.log('Grade :A+');

//  }
//   else if(number>=64 && number<=67){
//     console.log(' Grade :A-');

//  }
//  else if(number>=56&&number<=63){
//     console.log('Grade :B+');

//  }
//  else if(number>=45&&number<=55){
//     console.log('Grade :B');

//  }
//  else if (number>=30 && number<=44) {
//     console.log(' Grade :C');

//  }
//  else{
//     console.log('Fail');

//  }

// Logical Operators

//  let x="true";
//  let y="false";
//  console.log(x && y);

//  let marks=64;
//  let Grade ="A";
//  if( marks==63 && Grade=="A"){
//    console.log('Excellent');
//  }
//  else{
//    console.log('Bad');

//  }

// Q no.2

// Part-1
// var age = prompt("Entre Your age: ");
// age = parseInt(age);

// if(age >= 18){
//           console.log('You are  eligible to give vote .');
// }

// else{
//       console.log('You are  not eligible to give vote. ');

// }

// //part-2
// var Grade = prompt("Entre Your Grade(A,B,C,D): ");
// if(Grade==="A"){
//   console.log('Goog Job :');
// }
// else if(Grade==="B"){
//   console.log('Nice Try :');
// }
// else if(Grade==="C"){
//   console.log('Not Bad :');
// }
// else{
//   console.log('Try again larte :');

// }

// Part-3
// var age = prompt("Entre Your age: ");
// if (age>=0 && age<=2){
//   console.log('Baby');
// }
//  else if (age>=3 && age<=5){
//   console.log('Toddler');
// }
// else  if (age>=6 && age<=12){
//   console.log('Child');
// }
//  else if (age>=13 && age<=18){
//   console.log('Teenager');
// }
// else{
//         console.log('Older');

// }

// Part-4
 var number = prompt("Entre a Number");
 if(number>0){
   console.log(number + ': Number is positive');
 }
 else if(number<0){
   console.log(number + ': Number is Negative');
}
else{
   console.log(number  + ': Number is Zero');
}


// Array Methods

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = arr.filter((num) => {
    return num % 2 === 0;
}
)
 console.log(res); 
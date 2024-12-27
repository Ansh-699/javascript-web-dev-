// function helloWorld() {
//     alert("Hello World");
// }

// var pi=3.14;
// var myName="are you good";
// var answer = "yes i am ";


// document.write( "<br>" + "---------------------" + "<br>");
// document.write(pi + "<br>");
// document.write(myName + "<br>");
// document.write(answer + "<br>");
// document.write("---------------------");
// document.write ("<br>");

// function myFunction(){
//     let num = ["1","2","3","4","5","6","7","8","9","10"];
//     var carname = num[Math.floor(Math.random() * num.length)];
//     document.getElementById("demo").innerHTML = carname;
// }
// console.log(num);
// var person = {
//     firstName: "John",
//     lastName: "Doe",
//     id: 5566,
//     getInfo:function(){
//         return this.firstName + " " + this.lastName;
//     }
// };

// document.getElementById("demo").innerHTML=person.getInfo();
// document.write(person.name + " is " + person.age + " years old.");
// document.getElementById("demo").innerHTML = person.getinfo();


// var a = 10;
// function functiona(){
//         console.log("1");
//         function functionb(){
//             console.log("2");
//         }
//         functionb();
// }
// functiona();
// console.log("global");



// var name1 ="john";
// function first() {
//     var a="hello"
//     second();
//     var x= a+name1;
//     console.log(x);

// }

// function second(){
//     var b ="hi"
//     third();
//     var z = b + name1 ;
//     console.log(z);
// }

// function third(){
//     var c ='hey';
//     var z = c+name1;
//     console.log(z);
// }

// first();


// var age = 20 ;
// if (age>18){
//     document.write("you are eligible to vote");
// }



// var grade = "A";
// document.write("<br />");
// switch (grade){
//     case "A":
//         document.write("Excellent <br />");
//         break;
//     case "B":
//         document.write("Good <br />");
//         break;
//     case "C":
//         document.write("Fair    <br />");
//         break;
//     case "D":
//         document.write("Poor <br />");
//         break;
//     case "F":
//         document.write("very poor <br />");
//         break;
//     default:
//         document.write("Invalid grade <br />");
// }


// var i ;
// for (i=0; i<3; i++) {
//    console.log(i);
// }
// var count ;
// document.write("starting loop " + "<br />" + "<br />");
// for (count=0; count<10; count++){
//     document.write("current count : " + count + "<br />");
//     document.write(" <br />");
// }
// document.write("loop stopped");



// for ( var i=0; i<100; i++){
//     if (i%2==0){
//         console.log(i + " is even");

//     }
//     else{
//         console.log(i + " is odd");
//     }
// }
// var myArray = ["cat", "dog", "fish", "goat"];
// for (var i=0; i<myArray.length; i++){
//     console.log("I have a " + myArray[i] + " in index " + i);
// }

// var i =0;
// while (i<=10){
//     document.write("The number is " + i + "<br />");
//     i++;
// }
// document.write("The loop is over");

// function myFunction(){
//     alert("Hello World");
// }

// function sayHello(name,age){
//     document.write(name + " is " + age + " years old");
// }
// function addNumbers(a,b){
//     var c = a+b;
//     console.log(c);
//     document.write(c);
// }
// addNumbers(10,20);
//  function multiplyNumbers(a,b){
//      var c = a*b;
//      return c;
//  }
//     var result = multiplyNumbers(10,20);
//     console.log(result);

//     var add2= (a,b) => {
//         console.log(a+b);
//     }
//     add2(10,20);
//    var add3 = (a,b) =>{
//     console.log(a+b);
//    } 
//    add3(10,90);
   

//    var a= 100;
//    var b= 200;
//    var c = 10;
//    var linebreak = "<br />";
//     document.write("a+b-c = ");
//     result = a+b-c;
//     document.write(result);
//     document.write(linebreak);
//     document.write("a+b = ");
//     result = a+b;
//     document.write(result);
//     document.write(linebreak);

// function myFunction(){
//     var x = 5+5;
//     var y = "5" + 5;
//     var z = "Hello"+5;
//     var demoP = document.getElementById("demo");
//     demoP.innerHTML = x + "<br>" + y + "<br>" + z;
// }
// var name1 = "John";
// var myCollection = [
//     1,
//     "hello word",
//     true,
//     {
//         name: "John",
//         age: 34
//     },
//     function myname(){
//         console.log(name1);

//     },
//     ["apple", "banana", "cherry"]
// ]
// console.log(myCollection);

// function information (firstName, lastName, language){
//     if (arguments.length === 3){
//         console.log(firstName);
//         console.log(lastName);
//         console.log(language);
//     } 
// }
// information();
// information("john", "Doe", "English");

// function sayHello(name){
//     alert("Hello " );
// }


// function over(){
//     document.getElementById("mytext").style.color = "#00f";

// }

// function mout (){
//     document.getElementById("mytext").style.color = "#f00";
// }



// var retVal = confirm("i will eat all your crypto do tou want to continue ?"); if (retVal==true){
//    document.write("User wants to continue");
// }   else{
//     document.write("User does not want to continue");
// }



// varRetVal = prompt("Enter your name : ", "your name here");

    
//     alert("you have entered " + varRetVal);



// a = prompt("enter a number : ", "0");
// b = prompt("enter another number : ", "0");
// c = alert(parseInt(a) + parseInt(b));
// var question="What is 10+10";
// var answer= 20;
// var corrrect="<img src=1.jpg height=250 width=250>"; 
// var incorrect="<img src=2.jpg height=250 width=250>";
// var response=prompt(question,"0");
// for(count=0;count<2;count++){
//     if(response!=answer){
//         confirm("Wrong!, Press OK for another chance");
//         response=prompt(question,"0");
//         if(count==1){
//             alert("Better luck next time");
//         }
//     }
//     else{
//         alert("Great! You are correct");
//         count=3;
//     }
// }
// var output=(response==answer)?corrrect:incorrect;
// document.write("<br/>");
// document.write(output);

// function Redirect(){
//     window.location = "http://www.google.com";
// }
// document.write("You will be redirected to main page in 10 seconds");
// let countdown = 10;
// const countdownInterval = setInterval(() => {
//     document.write(`<br>Redirecting in ${countdown} seconds...`);
//     countdown--;
//     if (countdown < 0) {
//         clearInterval(countdownInterval);
//     }
// }, 1000);
// setTimeout('Redirect()', 10000);


// function validateForm(){
//     var x = document.forms["myForm"]["fname"].value;
//     if (x == "" || x == null){
//         alert("Name must be filled out");
//         return false;
//     }
// }


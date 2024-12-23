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
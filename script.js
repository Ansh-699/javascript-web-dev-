function helloWorld() {
    alert("Hello World");
}

var pi=3.14;
var myName="are you good";
var answer = "yes i am ";


document.write( "<br>" + "---------------------" + "<br>");
document.write(pi + "<br>");
document.write(myName + "<br>");
document.write(answer + "<br>");
document.write("---------------------");
document.write ("<br>");

function myFunction(){
    let num = ["1","2","3","4","5","6","7","8","9","10"];
    var carname = num[Math.floor(Math.random() * num.length)];
    document.getElementById("demo").innerHTML = carname;
}
var num=10;
console.log(num);
var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    getInfo:function(){
        return this.firstName + " " + this.lastName;
    }
};

document.getElementById("demo").innerHTML=person.getInfo();
document.write(person.name + " is " + person.age + " years old.");
document.getElementById("demo").innerHTML = person.getinfo();
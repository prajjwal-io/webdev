let a = 10;
console.log(`This is global variable which is a = : ${a}`);
if(true){
    let a = 20;
    console.log(`This is block variable it will looose its scope outside , a = : ${a}`);
}
console.log(a);

let age = 17;
console.log(`You are ${age} years old`);

if(age > 18){
    console.log("You can drink");
}
else if(age == 18){
    console.log("You are just 18");
}
else{
    console.log("You can't drink");
}

let names = ["Prajjwal", "Shubham", "Ravi", "Harry", "Rohan"];
console.log(names[2]);

name = "Prajjwal";
function greet(name, greetText = "Greetings from Javascript"){
    console.log(greetText + " Welcome to the new world ! " + name);

}
greet(name);

function sum(a, b, c){
    let d = a + b + c;
    return d;
}

let returnVal = sum(1, 2, 3);   
console.log(returnVal);

function avg(a, b){
    return (a + b)/2;
}

c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2);

// loops in javascript
i= 0;
for(; i<10; i++){
    console.log(i);
}
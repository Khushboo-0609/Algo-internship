console.log("hello students");
function changeText()
{
 alert("Button Clicked");
}

let name = "Anish";
let age = 25;
let isStudent = true;

console.log(name);
console.log(age);
console.log(isStudent);

let a = 10;
let b = 6;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);

console.log(10=="10"); // True
console.log(10==="10"); // False

age = 18;

if (age>=18){
 console.log("Can Vote");
}
else{
 console.log("Cannot Vote");
}

for(let i=1;i<=5;i++){
 console.log(i);
}

for (let i=2; i<=10;i+=2){
 console.log(i);
}

let i=1;
while(i<=5){
 console.log("hello");
 i+=1;
}

function greetscript(name,a,b){
 console.log("Hello " + name);
 return a+b;
}

let result = greet("Anish",10,5);
console.log(result);

export {greetscript, result};
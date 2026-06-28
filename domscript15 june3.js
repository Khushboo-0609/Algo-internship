let count = 0;

function changeHeadingText(){

 let heading = document.getElementById("title");
 heading.innerText="Changed the text";
 heading.style.color="red";
 heading.style.fontSize="40px";
 heading.style.backgroundColor="yellow";
}

function processform(){
 let name=document.getElementById("name").value; 
 let email=document.getElementById("email").value; 
 let phone_number=document.getElementById("phone_number").value;

 document.getElementById("paragraph").innerText="Welcome "+name;
 count++;
 document.getElementById("count").innerText=count + " people have registered till NOW";
 console.log(name);
 console.log(email);
 console.log(phone_number);
}

function hideemail(){
  document.getElementById("email").type="password";
  document.getElementById("email").style.display="none";
}

function add(a,b){
  return a + b;
}

const add = (a,b) => a+b;

console.log(add(3,5));

function greet(){
  console.log("Hello");
}

const greet = () => {
  console.log("Hello")
}

function square(x) {
    return x * x;
}

const square = (x) => x * x;

function greet(name) {
    return "Hello " + name;
}

const user = {
  name: "Anish",
  age: 25,
  city: "Kolkata",
  gender :"male"
}

const {name, age} = user;

const {name, ...rest} = user;

const {name:userName, age:userAge} = user;

console.log(userName);
console.log(userAge);

console.log(name);
console.log(age);


const arr = [1,2,3,4,5];

const [first, second] = arr;

const [first, , , ,fifth] = arr;

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);

const copy_arr1 = [...arr1];

const user1 = {
  name="Anish",
  age:25,
};

const updatedUser1 = {
  ...user1,
  location:"Kolkata"
};

const arr3 = [1,2,3,4,5,6];

const [first,...rest] = arr3; // error

// rest variable, must always be the last varibale

// first -> 1
// rest [2,3,4,5,6]

// const last = rest.pop();

const obj = {
  name:"A",
  age:'25',
  loc: "ABC",
  id:"1234",
}

const [name,age,...rest]=obj;

const numberset= new Set([10,20,30]);

const [first,second] =numberset;

const umap = new Map(
  ["name","Anish"],
  ["age",25]
)

const [[key1,value1],[key2,value2]]=umap;


const students = [
  {
    name:"ABC",
    age:25
  },
  {
    name:"XYZ",
    age:24
  },
  {
    name:"PQR",
    age:20
  }
]

let names=[]
let ages=[]

for (const {name,age} of students){
  names=[...names,name];
  ages=[...ages,age];
}

console.log(names);
console.log(ages)


import { greetscript, result } from "./script.js";
console.log(result);
greetscript();

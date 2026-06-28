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
const user1 = {
    name: "Rahul",
    age: 20
};

const user2 = {
    name: "Priya",
    age: 21
};

const users = [user1, user2];

console.log(users);
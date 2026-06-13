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
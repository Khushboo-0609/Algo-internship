const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.urlencoded({extended: true}));

app.get("/", (req,res)=>{
 res.sendFile(path.join(__dirname,"index.html"));
});

app.post("/register", (req,res) => {
 const studentData = `Name:${req.body.studentName}, Roll No: ${req.body.rollno}\n`;
 console.log(studentData);
 fs.appendFileSync("student_registry.txt",studentData);
 res.send(`<h3>${req.body.studentName} has been saved. Go back to main page`);
});

app.get("/students", (req,res) => {
  let students = "";
  if (fs.existsSync("student_registry.txt")){
   students = fs.readFileSync("student_registry.txt", "utf8");

   res.send(`<h2>Registered Students:${students}</h2>`)
  }
});

app.listen(3000, ()=>{
 console.log("Server is running on 3000");
})



const mongoose = require("mongoose");
const express = require("express");

const app = express();

mongoose.connect("mongodb+srv://ks2656181_db_user:khushboo26@cluster0.zhb8wd6.mongodb.net/student")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.use(express.json());
app.use(express.static("public"));


app.use(express.json());
app.use(express.static("public"));
mongoose.connect("mongodb://127.0.0.1:27017/studentNotesDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const noteSchema = new mongoose.Schema({
    name: String,
    course: String,
    date: String,
    note: String
});

const Note = mongoose.model("Note", noteSchema);

// Add Note
app.post("/notes", async (req, res) => {

    const { name, course, date, note } = req.body;

    const newNote = new Note({
        name,
        course,
        date,
        note
    });

    await newNote.save();

    res.status(201).json(newNote);
});



// Get All Notes
app.get("/notes", async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
});

app.delete("/notes/:id", async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);

    res.json({
        success: true
    });
});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});
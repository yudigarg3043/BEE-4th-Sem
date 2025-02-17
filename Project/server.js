const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const port = 3020;

//adding static middleware
app.use(express.static(__dirname));

app.get("", (req, res)=>{
    // res.send("<h1> Server is Created</h1>")
    res.sendFile(path.join(__dirname, "form.html"));
});
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})
app.get("/home",(req, res)=>{
    res.send("<h1> Welcome to Homepage</h1>");
});

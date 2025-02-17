const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/signup", (req, res)=>{
    res.render("signup");
})

app.get("/login", (req,res)=>{
    res.render("login");
})

app.listen(4023, ()=>{
    console.log("Server is Starting");
})
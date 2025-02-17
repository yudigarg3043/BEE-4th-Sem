const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    // res.send("Server created....");
    // res.sendFile("Template/index.html", {root: __dirname});
    let brand = "Amazon.com";
    res.render("index", {brandname: brand});
});
app.listen(4029, ()=>{
    console.log(`server is running on port: 4029`);
});

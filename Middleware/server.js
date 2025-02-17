// Middleware is a function which run between request and response. It has access to request and response object


const express = require("express");

const app = express();

// Level 1 of using a middleware -> Application Level [ app.use({MiddleWare_Name}) ]
app.use(m1);
// app.use(m2);

// A.) If we run a Middleware at application level then it will run on every request, no matter what type of request a user sends or on which path it sends.

// B.) Middleware runs in the order in which we call.


app.get("/", (req,res)=>{
    console.log("Running get request on path /");
    res.send(`<h1>This is Home Page</h1>`);
})

app.use(m2);

app.get("/about", (req,res)=>{
    console.log("Running get request on path /about");
    res.send(`<h1>This is About Page</h1>`);
})

function m1(req,res,next){
    console.log("Running Middleware 1....");
    next();
}


function m2(req,res,next){
    console.log("Running Middleware 2....");
    next();
}


app.listen(3555,()=>{
    console.log("Server Started");
});
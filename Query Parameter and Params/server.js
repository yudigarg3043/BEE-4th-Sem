const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

//Query Parameters...
app.get("/profile", (req, res) => {
  const {username, age, address} = req.query;
  //find in db
  res.send(`<center><h1>Profile of ${username}, Age ${age} living at ${address}</h1></center>`);
});

//Params....
app.get("/profile/:username",(req,res)=>{
  const {username} = req.params;
  res.send("Hi"+ " "+username);
});

//Users Data
let usersData = [
    {
      id : 1,
      name : "John Doe",
      address : "123 Main Street"
    },
    {
      id : 2,
      name : "Jane Doe",
      address : "456 Wall Street"
    },
    {
      id : 3,
      name : "John Smith",
      address : "789 River Street"  
    }
];

app.get("/allusers", (req, res) => {
  res.send(usersData);
});

//Finding user by id
app.get("/userByid", (req, res) => {
  let {id} = req.query;
  for(let i=0; i<usersData.length; i++){
    if(usersData[i].id == id){
      return res.send(usersData[i]);
    }
  }
  res.send("User not found");
});

//Delete user by id
app.get("/deleteuserbyid",(req,res)=>{
  let {id} = req.query;
  for(let i=0; i<usersData.length; i++){
    if(usersData[i].id == id){
      usersData.splice(i,1);
      return res.send(usersData);
    }
  }
  res.send("<center><h1>No User Found</h1></center>");
});

//Adding new user
app.get("/adduser", (req,res)=>{
  console.log(req.query);
  let {id, name, address} = req.query;
  usersData.push({id, name, address});
  for(let i=0;i<usersData.length-1;i++){
    if(usersData[i].id>usersData[i+1].id){
      let temp = usersData[i];
      usersData[i] = usersData[i+1];
      usersData[i+1] = temp;
    }
  }
  res.send(usersData);
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

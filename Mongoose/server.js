const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3500;

const User = require("./model/user");

//add new user
app.post("/users", async(req, res) => {
    let {name,user,email,password} = req.body;
    let newUser = new User({
      name: name,
      email: email,
      password: password
    });
    await newUser.save()
    res.send("User created");
});

//get all users
app.get("/users", async(req, res) => {
    let alluser = await User.find();
    res.send(alluser);
});

//get user by id
app.get("/users/:id", async(req, res) => {
    let {id} = req.params;
    let user = await User.findOne(id);
    res.send(user);
});

//Delete user
app.delete("/user/:id", async(req,res)=>{
  let {id} = req.params;
  let user = await User.findOneAndDelete(id); 
  //findOneAndDelete() deletes single documents from the collection on the basis of a filter and sort criteria as well as it returns the deleted document.
  
  // let user = await User.deleteOne(id);
  //deleteOne() removes single document from the collection.

  // let user = await User.findByIdAndDelete(id);
  //findByIdAndDelete() deletes single documents from the collection on the basis of a filter and sort criteria as well as it returns the deleted document.

  res.send(user);
});


app.put("/user/:id", async (req,res)=>{
  let {id} = req.params;
  let {name, email, password} = req.body;
  let user = await User.findByIdAndUpdate(id, {
    name: name,
    email: email,
    password: password
  })
  res.send(user);
})

mongoose.connect('mongodb://127.0.0.1:27017/blogging')
  .then(() => console.log('Connected!'));

app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
});
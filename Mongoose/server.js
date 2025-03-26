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
    let {id} = req.params.id;
    let user = await User.findOne(id);
    res.send(user);
} );

mongoose.connect('mongodb://127.0.0.1:27017/blogging')
  .then(() => console.log('Connected!'));

app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
});
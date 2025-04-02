const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3500;

const User = require("./model/user");
const Blog = require("./model/blog");

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


// Add new blog
app.post("/blogs", async (req, res) => {
  const { title, content, author } = req.body;
  const newBlog = new Blog({
      title: title,
      content: content,
      author: author
  });
  await newBlog.save();
  res.send("Blog created");
});

// Get all blogs
app.get("/blogs", async (req, res) => {
  const allBlogs = await Blog.find();
  res.send(allBlogs);
});

// Get blog by Title
app.get("/blogs/:title", async (req, res) => {
  const { title } = req.params;
  const blog = await Blog.findOne(title);
  res.send(blog);
});

// Delete blog by ID
app.delete("/blogs/:title", async (req, res) => {
  const { title } = req.params;
  const deletedBlog = await Blog.findOneAndDelete(title);
  res.send(deletedBlog);
});

// Update blog by title
app.put("/blogs/:title", async (req, res) => {
  const { title } = req.params;
  const { content, author } = req.body;
  const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, content, author },
      { new: true }
  );
  res.send(updatedBlog);
});


mongoose.connect('mongodb://127.0.0.1:27017/user')
  .then(() => console.log('Connected!'));

app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
});
//Params

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Hello World</h1>`);
});

// Profile using params
app.get("/profile/:username/:age/:address", (req, res) => {
  const { username, age, address } = req.params;
  res.send(`<center><h1>Profile of ${username}, Age ${age} living at ${address}</h1></center>`);
});

// Params for username
app.get("/profile/:username", (req, res) => {
  const { username } = req.params;
  res.send("Hi" + " " + username);
});

// Users Data
let usersData = [
  { id: 1, name: "John Doe", address: "123 Main Street" },
  { id: 2, name: "Jane Doe", address: "456 Wall Street" },
  { id: 3, name: "John Smith", address: "789 River Street" }
];

// Fetch all users
app.get("/allusers", (req, res) => {
  res.send(usersData);
});

// Finding user by id using params
app.get("/userByid/:id", (req, res) => {
  const { id } = req.params;
  const user = usersData.find(user => user.id == id);
  if (user) return res.send(user);
  res.send("User not found");
});

// Delete user by id using params
app.get("/deleteuserbyid/:id", (req, res) => {
  const { id } = req.params;
  const index = usersData.findIndex(user => user.id == id);
  if (index !== -1) {
    usersData.splice(index, 1);
    return res.send(usersData);
  }
  res.send("<center><h1>No User Found</h1></center>");
});

// Adding new user using params
app.get("/adduser/:id/:name/:address", (req, res) => {
  const { id, name, address } = req.params;
  usersData.push({ id: parseInt(id), name, address });
  usersData.sort((a, b) => a.id - b.id);
  res.send(usersData);
});

app.listen(3100, () => {
  console.log("Server is running on port 3100");
});

//Post Request: If you want to change the state of the server, you should use POST request.
//Data is not shown in the URL, so it is more secure than GET request.

const express = require("express");
const app = express();
//It is middleware that converts the urlencoded form data to object that is readable by server.js.
app.use(express.urlencoded({extended: true}));


let userData = [];

app.get('/adduser', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});

app.post("/adduser", (req, res) => {
    let {name, email, password} = req.body;
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    let newUser = {
        name: name,
        email: email,
        password: password
    };
    userData.push(newUser);
    // for(let i=0; i<userData.length; i++){
    //     if(userData[i].name == newUser.name && userData[i].email == newUser.email && userData[i].password == newUser.password){
    //         res.send("User already exists");
    //         return;
    //     }
    // }
    res.send(userData);
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
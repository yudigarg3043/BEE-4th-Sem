//Post Request: If you want to change the state of the server, you should use POST request.
//Data is not shown in the URL, so it is more secure than GET request.

const express = require("express");
const app = express();

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
});


app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
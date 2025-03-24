const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3500;

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!'));

app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
});
const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    name : String,
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    }
});

module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

let blogSchema = new mongoose.Schema({
    Title : {
        type : String,
        require : true
    },
    Content : {
        type : String,
        require : true
    },
    Writer : {
        type : String,
        require : true
    }
    // date : {
    //     type : Date,
    //     default : Date.now()
    // }
});
// let blogSchema = new mongoose.Schema({
//     Title : {
//         type : String,
//         require : true
//     },
//     Writer : {
//         type : String,
//         require : true
//     }
// });

module.exports = mongoose.model("Blog", blogSchema);
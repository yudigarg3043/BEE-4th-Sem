const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 4002;
var hbs = require('hbs');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// const userRoutes = require("./routes/userRoutes");

// const blogRoutes = require("./routes/blogRoutes");
const user = require("./model/user");
const blog = require("./model/blog");

app.use(express.json());
// app.use("/users", userRoutes); //will work on every request with base path /users
// app.use("/blogs", blogRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req,res)=>{
    res.render("home",{
        name: "Yudhish"
    });
})

app.get("/user",(req,res)=>{
    res.render("user",{
        username: "yudigarg_3043",
        email: "yudhishgarg645@gmail.com"
    })
})

app.get("/blogs", async(req,res)=>{
    let all = await blog.find();
    res.render("blogs",{
        data : all
    });
})

app.get("/alluser", async(req,res)=>{
    let all = await user.find();
    res.render("alluser",{
        data : all
    })
})
app.get("/alluser/:name", async(req,res)=>{
    let name = req.params.name;
    let all = await user.findOne({name:name});
    res.render("alluser",{
        data : all
    })
})

app.get("/blogs/:id", async(req,res)=>{
    let {id} = req.params;
    let blogs = await blog.findById(id);

    res.render("blog",{
        blog: blogs
    })
})

app.get("/addblog", async(req,res)=>{
    res.render("addblog");
})

app.post("/addblog", async(req,res)=>{
    const {title,content, author} = req.body;
    const NewBlog = new blog({
        Title: title,
        Content: content,
        Author: author
    });
    console.log(title, content, author)
    await NewBlog.save();
    res.redirect("/blogs");
})


mongoose.connect('mongodb://127.0.0.1:27017/blogging').then(() => console.log('Mongodb Connected!'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
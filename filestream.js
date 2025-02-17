const fs = require("fs");

//Blocking task
// console.log("file is being created....");
// fs.writeFileSync("file1.txt", "we have created a file created using sync function");
//Non-Blocking task
//always pass callback function in async function else a error will be shown
// fs.writeFile("File2.txt","this is a file created using async function",(err, result)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("File by async function is created");
//     }
// })
// console.log("file is created successfully.....");

//Reading blocking task...
// const data = fs.readFileSync("File2.txt", "utf-8");
// console.log(fs.readFileSync("File2.txt", "utf-8"));

//Reading Non-blocking task...
// fs.readFile("File2.txt", "utf-8", (err, data)=>{
//     if(err) {console.log(err);}
//     else {console.log(data);}
// });

// //Renaming a file
fs.rename("File2.txt", "File3.txt", (err)=>{
    if(err) {console.log(err);}
    else {console.log("File is renamed successfully...");}
});
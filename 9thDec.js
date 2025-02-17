        //Server Creation method

// modules are predefined codes that we need to import to use certain functions
// Servers can be created as well as destroyed
const http = require('http')//require is keyword to import a module
const server = http.createServer((request, response)=>{

    
//         if(request.url === "/home"){ ///these are endpoints

//         response.end("<h1> Welcome to Home Page </h1>")

//     }//if a user types /home in url then it moves to the certain page that we define in this
//     //To access the home page write -> "localhost:{Port Number}/home"

//     else if(request.url === "/about"){
//         response.end("<h1> Welcome to About Page</h1>")
//     }

//     else if(request.url === "/service"){
//         response.end("<h1>Welcome to Service Page</h1>")
//     }

//     else{
//         response.end("<h1>404 Page not Found</h1>")
//     }

    response.end("<h1> Server is Created and can be Destroyed </h1>")//response is a variable but .end is the method to end the server or to reflect the data on server


})//server is just a variable but createserver is method and is asynch function

server.listen(4000, ()=>{
    console.log("Server is Started in Port: 4000")
})//for defining port on which server runs, 4000 is the port number(we can write any number), function is created which shows the data we write in it after creating server
    // To check or start on browser type -> "localhost:&{Port number}"

    //creating endpoints using http     Endpoint are just routes


                //Importing the Data of other file

// const orderStatus = require("./9thDec2.js")//Import, For importing exporting is necessary

const {orderStatus, greet} = require("./9thDec2.js")//Import, For importing exporting is necessary(Object is made to import multiple functions)

orderStatus();
greet();

//         Conclusion of the lecture:
// 1. npm is node package manager
// 2. module is predefined code which are accessed using required function
// 3. Endpoints are the routes in url
// 4. Importing and Exporting are the way to read other files in one file
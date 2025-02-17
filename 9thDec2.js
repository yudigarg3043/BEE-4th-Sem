                    //Importing or exporting data in other files
                    //Accessing Data of other files

const orderStatus = ()=>{
    console.log("Order is Delivered Successfully")
}

const greet = ()=>{
    console.log("Greet Function")
}
// orderStatus();

// module.exports = orderStatus;//Exporting the Function(for one function)
module.exports = {orderStatus, greet} //Exporting the Function(for multiple functions), Make object and write function names in it
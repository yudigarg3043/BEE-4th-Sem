console.log("Order placed");
console.log("order being processed");
console.log("order delivered");

setTimeout(()=>{
    console.log(`order cancelled`);
},2000);

let orderstatus= (status)=>{
    console.log(`order is ${status}`);
}

orderstatus("Rejected");


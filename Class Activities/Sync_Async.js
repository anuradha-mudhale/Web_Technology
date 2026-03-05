// console.log("Start");

// add=(a,b)=>{
//     return a+b;
// }

// let r = add(5,4);
// console.log(r);
// console.log("end");

// Async js->Some task take time like api call,file read,fetching data from server
//js does not wait it moves to next line not blocking behaviour
//fetching data from server ,reading file,setTimeout,api calls

console.log("start");
setTimeout(()=>{
       console.log("inside timeout")
},2000);

console.log("end");

//setTimeout is asynchronous it takes 2 seconds

//Activity
//guess the output game

console.log("A");
setTimeout(()=>{
       console.log("inside A");
},2000);

//blocking and unblocking example
console.log("start");
let display=(()=>{
       console.log("hey girls!");
})
console.log("end");
//real time use
//api fetch activity


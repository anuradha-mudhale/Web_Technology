//promises ->A promises is an object that reperesent a future result of an a asynchronous operations
//promises means simply i promise to give result later
//promises has 3 state ->1.pending 2.resolved 3.rejected
//eg ---> pending -> resolve -> reject
// let mypromise = new Promise((resolve,rejected)=>{
//     let success = true;
//     if(success)
//        {
//          resolve("data fetch succesfully");
//        }else{
//          rejected("do not resolve");
//        }
// });

// mypromise.then((result)=>{//run when success
//     console.log(result)
// }).catch((Error)=>{//run when error
//     console.log(Error); 
// });

// //Home Activity
// //1.why promises is better than callback

// let newpromise = new Promise((resolve,rejected)=>{
//     setTimeout(()=>{
//         console.log("Async task complete");
//         resolve();
//     },2000)
// })
// newpromise.then(()=>{
//     console.log("promise consumed");
// })

// const promiseTree = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res({username:'Anuradha',Id:1});
//     },2000)
// })
// promiseTree.then((user)=>{
//     console.log(user)
// })

//create 4 promises example 
//1.simple,by using sync,with fun



//with fetch
//fetch is a built in javaScript method use to make http request
//fetch method return promises
//example:
//syntax->fetch("url")it return promises

fetch("https://jsonplaceholder.typicode.com/users/1")
.then((response)=>{
   return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

//Activity
//learn code line by line 
//how to use async await example with fetch method
//fetch users display name in html list
//fetch post show only 1st 5 records 
//create a fake promie manually resolve after 3 sec and reject after 3 sec
//what is promise and its status;
//differnce between promises and calback
//what is fetch meyhod in js
//what does fetch return
//why do we use res.json
//difference between then or catcha and asyn and awai
//what is a promise chaining

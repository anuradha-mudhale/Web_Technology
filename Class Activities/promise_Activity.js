//1.why promises is better than callback

//Promises are better than callbacks because they make asynchronous code easier to read, manage, and handle errors properly.
//With callbacks, when multiple async operations depend on each other, 
//code becomes deeply nested and hard to understand.
//Callback exmaple 
// login(user, function() {
//   getProfile(function() {
//     getPosts(function() {
//       console.log("Done");
//     });
//   });
// });

//Promises allow chaining using .then() instead of nesting.
//Promises example 
// login(user)
//   .then(getProfile)
//   .then(getPosts)
//   .then(() => console.log("Done"));

//Better Error Handling 
//In callbacks, each function needs its own error handling.
//With promises, one .catch() handles all errors.
//Promises Works Easily with async/await
//Promises are better than callbacks because they make asynchronous code easier to read, manage, and handle errors properly.
//With callbacks, when multiple async operations depend on each other, 
//code becomes deeply nested and hard to understand.
//Callback exmaple 
// login(user, function() {
//   getProfile(function() {
//     getPosts(function() {
//       console.log("Done");
//     });
//   });
// });

//Promises allow chaining using .then() instead of nesting.
//Promises example 
// login(user)
//   .then(getProfile)
//   .then(getPosts)
//   .then(() => console.log("Done"));

//Better Error Handling 
//In callbacks, each function needs its own error handling.
//With promises, one .catch() handles all errors.
//Promises Works Easily with async/await


//Promises are better than callbacks because they solve the problem of callback hell
//by providing a cleaner chaining mechanism using .then(). They also provide centralized error handling
//using .catch(), improving maintainability. Additionally, Promises are the foundation for async/await, 
//which makes asynchronous code more readable and scalable in production applications

//2.When to use async and await
//"I use async/await when handling asynchronous operations like API calls, database queries, 
//or file handling. It improves code readability compared to Promise chaining and provides structured error handling using try-catch. Since async/await is built on top of Promises,
//it makes complex asynchronous flows easier to manage in production applications."

//1st example
let promise = new Promise((resolve,reject)=>{
    let getColor = true;
    if(getColor)
    {
        resolve(()=>{
            console.log("Happy Holi!!! you get all colors");
        })
        
    }else
    {
        reject("Today is not Holi!!");
    }
});
promise.then((result)=>{
    console.log(result());
}).catch((error)=>{
    console.log(error);
});



//2nd example
let p1 = new Promise((resolve,reject)=>{
    let obj = true;
    if(obj)
    {
        setTimeout(()=>{
             resolve({
            fname:"Anuradha",
            lnmae:"Mudhale",
            age:"20"
        },2000)
        })
    }else{
        reject("promise is not resolved");
    }
});

p1.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});

//Example 3
async function Square(n)
{
    let p2 = new Promise((resolve,reject)=>{
        let num = n;
        resolve(num*num);
    })

    let result = await p2;
    console.log(result);
}
Square(5);

//Example 4 - check eligibility for voting 
function canVote(age)
{
    return new Promise((resolve,rejected)=>{
        if(age>=18){
            resolve("You can Vote!!");
        }else{
            rejected("you cannot vote");
        }
    })
}


async function ShowResult(){
    try{
        let result = await canVote(20);
        console.log(result);
    }catch(error){
        console.log(error);
    }
}

ShowResult();
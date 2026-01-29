//object literals
let myobj = {
name:"Anuradha",
"full name":"Anu Mudhale",
//[mySymbol]:"mykey1",
age:20,
location:"Hupari",
email:"anu21@gmail.com",
isLogin:false,
loginDay:['Monday','Tuesday','wednsday','thursday','friday','saturday']
}
console.log(myobj.email);
console.log(myobj["full name"])
//console.log(myobj[mySymbol]);
console.log(typeof(myobj));
//there are two types of object 1.object literals 2.constructor 3.single tun
//when you create constructor it create single ton object it means itself objects 
//when we create obj literals--> single ton not create
//obj constructor--> single ton create


//Symbol example
const mySymbol = Symbol("js");
const myobj2 =  {
    [mySymbol] : "SJT"
}
console.log(myobj2);
console.log(typeof(myobj2));

myobj.email = "dhanu@gmail.com";
console.log(myobj.email);

//Object.freeze(myobj);
myobj.email = "sha@gmail.com";
console.log(myobj.email);

myobj.greeting = function(){
    console.log("hello js user");
}
console.log(myobj.greeting());

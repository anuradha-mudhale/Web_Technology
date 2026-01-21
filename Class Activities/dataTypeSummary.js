//non-primitive=>object,Array,Function

//Symbol Example->unique id when require use symbol

const anotherid = Symbol("123");
console.log(typeof(anotherid));

const id = 123;
console.log(typeof(id))
console.log(typeof(anotherid))
console.log(id===anotherid);

//js is dynamic typed language


//Array

const heros = ['salman_khan','mahesh_babu','navab'];
const num = [1,2,3];


//objects :Key-value pairs
const obj={
    "fname":"Anuradha Mudhale",
    "age":21
}
console.log(obj.fname)
console.log(obj.age)

//functions function declaration ,defination,how to call function ---Activity---
function display(){
           console.log("Anu");                 
}
const myFunction = display;
console.log(myFunction);

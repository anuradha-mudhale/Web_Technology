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

//memory there are two type ->1]stack 2]heap
//stack used for primitive datatype
//heap used for non-primiive datatype

let MyYoutubename = "SJT"
let newMyYouTubename = MyYoutubename
console.log(newMyYouTubename) //stack memory is used for primitive datatype like string boolean number copy of value is given
newMyYouTubename = "ABC"; //when we assign one variable to another a copy i made so changing one does not affect to others
console.log(newMyYouTubename)

//used for non-primitive datatypes object functions array reference is given
let user1 = {
    "fname":"Anu",
    "age":20,
    "id":7
}

let user2 = user1;
user2.id = 4;
console.log(user1.id) //objects are stored in heap memory when we assign one obj to another variable reference is copied not the value 
                      // if we change one both variable see the changes
console.log(user2.id)


function myfun()
{

}
//function is a block of code reurn to do perticular task

function add(num1,num2)
{
   let res= num1+num2;
   return res;//after return there is no scope in that fun
   //console.log("hello js") //this is not print because when we return something it go outside 
}
let finres = add(10,20);
console.log(finres);

function loginUSerMsg(username)
{
    return `${username}`
}
console.log(loginUSerMsg("Anuradha"));
//when your string is empty then its give undefined
// if(username === 'undefined')
// {
//     console.log("please enter username")
// }

function calPrice(num1){
    return num1;
}
console.log(calPrice(200,300,400));

const username = {
    name:"Anu",
    age :20
}
function handleobject(obj)
{
    console.log(`user name is ${obj.name} and age is ${obj.age}`);
}
handleobject(username);

let arr = [10,20,30,40];
function handlearr(ar)
{
    return `array element is ${ar[0]}`;
   
}
console.log(handlearr(arr))



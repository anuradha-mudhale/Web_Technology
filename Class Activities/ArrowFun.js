//this->used for inform current context
function myfun(){

}

const addNum = function()
{
let username = "Anuradha";
//console.log(this)
// console.log(username);
// console.log(this.username);
}
addNum();
function car(){
    let name = "tunwal";
    console.log(this)
//     console.log(name);
//     console.log(this.name);
}
car();
 
const chai = () => {
    let username ="Anu";
    console.log(this);//this is not used in arrow
}
chai()

const addNum1 = (n1,n2) =>{
    return `${n1+n2}`
}
console.log(addNum1(10,20))

//Activity1:Write code for arrowfun with 2 examples
const checknum = (num) => {
   if(num%2==0)
   {
    return `${num} is even`;
   }
   else{
    return `${num} is odd`;
   }
}
console.log(checknum(10));

let sum = 0;
const arrSum = (arr) =>{
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    console.log(`sum of array elements is ${sum}`);
    
}
arrSum([10,20,30,40]);

//2.write code for switch case

console.log(`1.BLUTOOTH`);
console.log(`2.speaker`);
console.log(`3.Tv`);
let choice = 1
switch(choice)
{
    case 1:
        console.log(`congratulations you get BLUTOOTH`);
        break;
    case 2:
        console.log(`congratulations you get SPEAKER`);
        break;
    case 3:
        console.log(`congratulations you get TV`);
        break;
    default:
        console.log(`wrong choice`);
}


//3.how to use truthy and falsy values with examples

//-----In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy 
// except false, 0, -0, 0n, "", null, undefined, NaN----//

console.log(true && "dog");  
// returns "dog"

console.log([] && "dog");
// returns "dog"
console.log()

let username = "";
let displayName = username || "Guest";
console.log(displayName);

//4.how to use ternary operator in js

let marks = 50;
let res = (marks>=35)?"pass":"fail";
console.log(res);

let grade  = 'O';
let resGrade = (grade == 'A')?"Excellent grade":"Normal grade";
console.log(resGrade);

//5.write a code for how to use loops in array
//Total loops:1.for Loop,2.while loop,3.do-while loop,4.for each, 4.for in ,for on
//using for
let arr1 = [1,2,3,4,5,6];
let sum1=0;
for(let i=0;i<arr1.length;i++)
{
    if(arr1[i]%2==0)
    {
        sum1+=arr1[i];
    }
}
console.log(`sum of even array numbers is ${sum1}`);
//using while
let arr2 = [1,2,3,4,5,6];
let sum2=0;
while(arr1>=-1)
{
    sum2+=arr2;
    arr2++;
   
    
}
 console.log(sum);

//6.where use for of and for in,while,do-while.
//7.how to use map and filter function in javascript
//The map() method creates a new array by applying a given function to each element of the original array
let arr4 = [2,4,6,8,10];
const multiplyNumbers = arr4.map(arr4 => arr4*3);
console.log(multiplyNumbers);

//filter
//The filter() method creates a new array containing only elements that satisfy a specified condition
const digits = [1,2,3,4,5,6,7];
const evenSum = digits.filter(digits => digits%2==0);
console.log(evenSum);
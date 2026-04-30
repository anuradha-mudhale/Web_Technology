//Part A – Arrow Functions
//Write a JavaScript program using an arrow function to calculate the square of a number.

const square = (num)=>num*num;
console.log("square of num 5 is: "+square(5));

const sq = (no)=>no*no;
console.log("square of 2 is: "+sq(2));

//Even and odd
let checkEvenOdd = (num)=>(num%2==0?"Even":"Odd");
console.log("The number is: "+checkEvenOdd(8));

//Maximum of two numbers
let maxnum = (num1,num2)=>(num1>num2?num1:num2);
console.log("Maximum number is: "+maxnum(10,20));

//sum of three numbers
let sum = (a,b,c)=>a+b+c;
console.log("sum of three numbers is: "+sum(10,20,30));

//cel to faherinite
const cTf = (c) => (c*9/5)+32;
console.log("Celsious to Fahrenheit of 30 is: "+cTf(30));

//loops

//1.print 1 to 10
console.log("numbers:  ");
for(let i=1;i<=5;i++)
{
    console.log(i);
}

//print even no 1 to 20
console.log("Even Numbers: ");
let i=1;
while(i<10)
{
    if(i%2==0)
    {
        console.log(i);
    }
    i++;
}

//factorial
let num=5;
let fact=1;
for(let i=1;i<num;i++)
{
    fact*=i;
}
console.log("facorial of num5 is: "+fact);

//sum of array elements
let arr = [10,20,30,40];
let suma=0;
for(let i=0;i<arr.length;i++)
{
    suma+=i;
   
}
 console.log("sum is: "+suma);

 console.log("Part C – map()");

 console.log("Square of numbers: ");
 let numbers = [1,2,3,4,5,6];
 let res = numbers.map(num=>num*num);
 console.log(res);

 console.log("Convert in UPPERCASE")
 let str = ['Anu','chinu','dhanu','swati'];
 let upper = str.map(name=>name.toUpperCase());
 console.log(upper);

 console.log("Add 5 to each element: ");
 let arr1 = [10,20,30,40,50];
 let addd = arr1.map(s=>s+5);
 console.log(addd);

 console.log("Part D – filter()");

 //get even numbers:
 let n = [9,8,7,6,5,4,3,2,1]
 let e = n.filter(num=>num%2===0);
 console.log(e);

 //numbers greater than 50
let arr2 = [20,60,80,30];
let greater = arr2.filter(num => num > 50);
console.log(greater);

let students = ["Anuradha", "Ram", "Suresh"];
let longNames = students.filter(name => name.length > 5);
console.log(longNames);

console.log("Part E – reduce()");
let arr4 = [10,50,30,80];
let maxValue = arr4.reduce((acc, curr) => 
    curr > acc ? curr : acc
);
console.log(maxValue);

let marks = [60,70,80,90];
let sumMarks = marks.reduce((acc, curr) => acc + curr, 0);
let average = sumMarks / marks.length;
console.log(average);
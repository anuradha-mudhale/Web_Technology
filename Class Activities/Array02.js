const superHeros = ['rohit','dhoni','virat'];
const values = ['a','b','c']
superHeros.push(values)//it push the array
console.log(superHeros)
console.log(superHeros[3])
console.log(superHeros[3][2])

//Array Concatenations
const fruits = ['Apple','mango']
const abc = superHeros.concat(fruits);//it concates the array elements [ 'rohit', 'dhoni', 'virat', [ 'a', 'b', 'c' ], 'Apple', 'mango' ]
console.log(abc)

const number = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(number)

const number1 = number.flat(Infinity) //flattend all levels no matter how deep
//flat does not change original array it returns new array useful when working with nested data
console.log(number1)

const number2 = number.flat(1)  //how deep a nested array should be flattened default value is 1 
console.log(number2)

//data Scripting using This Methods

console.log(Array.isArray("Anuradha"))//check given value is array or not
console.log(Array.isArray(number1))
console.log(Array.from("Anuradha"))//converts an iteratable object lightstream set map into an array
console.log(Array.from({"name":"Anu"}))
console.log(Object.keys({"name":"Shraddha"}));
console.log(Object.entries({"name":"Shraddha"}));

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3))//create new array from given value no matters how many

//Q.difference between array.of and array.from
//converts values and converts iteratable



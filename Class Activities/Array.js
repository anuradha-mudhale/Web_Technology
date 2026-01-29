//Array
let myarr = [0,1,2,3,4,5];
console.log(myarr)
console.log(typeof(myarr))

const arr = new Array(0,11,2,3)
console.log(arr[1])

//Array Methods
arr.push(7);
console.log(arr)//add values in array


console.log(myarr.pop())
console.log(myarr) //remove last value from array

arr.unshift(9)
console.log(arr)//it shifts all element and added at 1st position

let b=[101,102,103]
b.unshift(9)
console.log(b)
b.shift()
console.log(b)//it removes 1st element

console.log(arr.includes(11))//check element present in array or not

console.log(arr.indexOf(11))//display the element present in which index

//---splice and split---//Activity
//array.splice(startIndex, deleteCount, item1, item2, ...)

let arr1 = ["JS", "Python", "C", "Java"];
arr1.splice(1, 2); //delete from startindex at 1 and delete 2 elements
console.log(arr1);

let s = "apple,banana,mango";
let arr2 = s.split(","); //split is used to convert string to array in this when you display comma split it 
console.log(arr2[0]);

//A JavaScript string is zero or more characters written inside quotes.
//string can be written in single or double quotes

let str = "Anuradha Mudhale";
console.log(str);

//we use string interpolation using backtick
console.log(`Hello ${str}`)

//String properties
let goal = "To learn JavaScript";
console.log(goal.length);//it wites the length start from 1
console.log(goal.toUpperCase());//convert uppercase
console.log(goal.toLowerCase());//convert lowercase
console.log(goal.charAt(0));//it writes the character at pericular index
console.log(goal.indexOf('t'));//it writes the index of the perticular character
console.log(goal.trim());//it removes string starting and ending spaces
console.log(goal.slice(3,-5))//it split the string from staring or ending index o/p:-le end not include it allow negative index
console.log(goal.substring(3,-5))//it is same as slice but does not allow negative index 
//Important rules of substring():
//Negative index → treated as 0 in this example start 3 and end is 0 then 0<3 o it come first(0,3)->o/p is To
//If start > end → JavaScript swaps them

let s = "I Love Java"
console.log(s.replace("java","javaScript")) //it gives same bcz js is case sensitive and it look as j and J are different
console.log(s.replace("Java","javaScript"))//replace is used to replace the words   


let d = "cat cat cat";
console.log(d.replace('cat','dog'))
console.log(d.replaceAll('cat','dog'))//replace all occurences also one or more 
console.log(d.includes('cat')) //check the string exits or not if yes return true otherwise retuen false
console.log(d.split(","))//convert string to array 

let s4 = new String("Hello"); //thi rarely used
"Hello" === new String("Hello") // false  new String() creates an object, not a primitive Can cause comparison bugs
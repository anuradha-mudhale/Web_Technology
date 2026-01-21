let num = 33
let numstring = String(num)
console.log(numstring)
console.log(typeof(numstring))

//String to number

let abc = "JJ";
let conv = Number(abc)
console.log(conv);
console.log(typeof(conv));

//Activity number 1
//num to str,str to num,boolean,undefined,and check typeOf 

//****Operations********//
console.log("Arithmetic operations")
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2%2)

let str1="hello"
let str2  = "Anuradha"
console.log(str1+" "+str2)

//js only automatically convert a string to a number in arithmetic opertions
//Important Rule in JavaScript
//The + operator is special.
//If any operand is a string, JavaScript treats + as string concatenation, not addition.
//Evaluation happens left to right.
console.log("1" +2)    //op:(12)
console.log("1" +2+2) //op:(122)
console.log(1+2+"2") //op:(32)
 
//Key Takeaway (Very Important)
//JavaScript does NOT always convert strings to numbers
//With +, string wins
//Other operators (-, *, /) force numeric conversion
console.log("5" - 2)   // 3
console.log("5" * 2 )  //10


//Activity 2 write reason
// Printing boolean value directly
console.log(true);      
// Output: true


// Unary plus (+) converts boolean true into a number
// true → 1
console.log(+true);     
// Output: 1


// Unary plus (+) converts empty string into a number
// "" → 0
console.log(+ "");      
// Output: 0


// Post-increment example
let gameCounter = 100;

// First uses the value (100), then increases it by 1
gameCounter++;
console.log(gameCounter);  
// Output: 101


// Pre-increment example
let scoreCounter = 200;

// First increases the value by 1, then uses it
++scoreCounter;
console.log(scoreCounter); 
// Output: 201




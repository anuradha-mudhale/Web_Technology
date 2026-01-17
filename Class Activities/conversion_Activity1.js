//String to Number

let str = "Anuradha";
let num = Number(str);
console.log("String To Number Conversions:")
console.log("before conversion:")
console.log(typeof(str))
console.log("After Conversion:")
console.log(typeof(num))

//Number to String
console.log("Number to String Conversion")
let number = 123
console.log("before conversion:")
console.log(typeof(number))
let string = String(number);
console.log("After Conversion:")
console.log(typeof(string)); 

//Date to Number
console.log("Date to Number Conversions")
let d = new Date();
console.log(d)
console.log("before conversion:")
console.log(typeof(d))
console.log("After Conversion:")
let d_to_num = Number(d)
console.log(d_to_num);
console.log(typeof(d_to_num))

//Date to String

console.log("Date to String Conversions")
let d1 = new Date()
console.log("before conversion:")
console.log(typeof(d1))
console.log("After Conversion:")
let str1 = String(Date);
console.log(typeof(str1))

//Boolean to number
console.log("Boolean To Number")
let a = true;
console.log("before conversion:")
console.log(typeof(a))
let b = Number(a);
console.log("After Conversion:")
console.log(b)
console.log(typeof(b));

//Boolean to String
console.log("Boolean To String")
let res = false
console.log("before conversion:")
console.log(typeof(res))
console.log("After Conversion:")
let res_con = String(res)
console.log(typeof(res_con))

//Numbers to boolean
console.log("Numbers to boolean")
let num2 = 456
console.log("before conversion:")
console.log(typeof(num2))
let bool = Boolean(num2)
console.log("After Conversion:")
console.log(bool)
console.log(typeof(bool))

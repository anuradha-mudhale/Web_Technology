// const a=10;
// a=20;              //const does not override value or not change
// console.log(a);

// var aa=10;        //it reassign new value
// aa=200

// let ab=20;      //it reassign new values
// ab=300;

// console.log(aa);
// console.log(ab);

var x=10;
let y=20;
{
    var x = 100;     
    let y = 200;
    console.log("inside scope") //let is preferred because it is block scoped and prevents unwanted changes to variables outside the block, unlike var.
    console.log(x,y); //(100,200)
   
}
console.log("outside Scope")
console.log(x,y);  //var takes value in function this is not good so use let  output:-(100,20)

//In this example, var changes the value of the variable outside the block, which can cause unexpected behavior.
//let is block scoped and prevents such accidental changes. 
//Therefore, let is safer and more predictable, which is why it is preferred over var.

var t = 10;
console.log(t)
t = 20; 
console.log(t)     // ✅ Reassignment allowed
var t = 30;  // ✅ Redeclaration allowed
console.log(t)


let n1 = 10;
console.log(n1);
n1 = 20;      // ✅ Reassignment allowed
console.log(n1);
//let n1 = 30;  // ❌ Redeclaration not allowed (error display n1 has already been declared)
console.log(n1);
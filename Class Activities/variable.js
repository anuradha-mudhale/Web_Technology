// const a=10;
// a=20;              //const does not override value or not change
// console.log(a);

// var aa=10;        //it assign new value
// aa=200

// let ab=20;      //it assign new values
// ab=300;

// console.log(aa);
// console.log(ab);

var x=10;
let y=20;
{
    var x = 100;     
    let y = 200;
    console.log("inside scope")
    console.log(x,y);
   
}
console.log("outside Scope")
console.log(x,y);  //var takes value in function this is not good so use let

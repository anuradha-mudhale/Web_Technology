let display = document.getElementById('display');
let input  = document.getElementById('text');


input.addEventListener("input",function(){
    display.innerHTML = input.value;
})

document.getElementById('bold').addEventListener("click",function(){
    display.style.fontWeight = "bold";
})

document.getElementById('italic').addEventListener("click",function(){
    display.style.fontStyle = "italic";
})

document.getElementById('Red').addEventListener("click",function(){
    display.style.color = "red";
})

document.getElementById('increase').addEventListener("click",function(){
    fontSize+=2;
    display.style.fontSize = fontSize + "px";
})

document.getElementById('decrease').addEventListener("click",function(){
    fontSize-=2;
    display.style.fontSize = fontSize + "px";
})

document.getElementById('reset').addEventListener('click',function(){
    display.style.fontWeight = "normal";
    display.style.fontStyle = "normal";
    display.style.color = "black";
    fontSize = 16;
    display.style.fontSize = fontSize + "px";
})
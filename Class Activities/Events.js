document.getElementById('Nature').onclick = function(){
    alert('view the nature');
}

document.getElementById('japan').addEventListener('click',function(){
    alert("Welcome to japan")
})

document.getElementById('google').addEventListener('click',function(e){
    console.log('google clicked');
    e.preventDefault()
})
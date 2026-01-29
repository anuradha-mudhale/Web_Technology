let mydate=new Date()
console.log(typeof(mydate))
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toISOString())
console.log(mydate.toLocaleString())
console.log(mydate.toDateString())
console.log(mydate.timestamp)//when we use t

let myTimeStamp = Date.now()
console.log(myTimeStamp)  
console.log(Date.now()) //compare in milliseconds
console.log(Date.now()/1000)//convert in second
console.log(Math.floor(Date.now()/1000))//lowest value

let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getFullYear())
console.log(newDate.getMonth())
console.log(newDate.getUTCDate())
console.log(newDate.toLocaleString())
console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))
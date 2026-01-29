const balance = new Number(100)
console.log(balance)
console.log(typeof(balance))

console.log(balance.toString())
console.log(balance.toFixed(2))//when we build ecommerse website and precision value is so long then we use toFixed
console.log(balance.toString().length)

const h = 1000000
console.log(h.toLocaleString()) //by default US standard ##
console.log(h.toLocaleString('en-IN'))//by indian format

//Math
console.log(Math.abs(-4)) //negative value converts positive posite will be positive
console.log(Math)
console.log(Math.round(4.6))
console.log(Math.ceil(4.6))//choose top value
console.log(Math.floor(4.6))//choose lowest value
console.log(Math.min(1,2,3,4,5))
console.log(Math.max(1,2,3,4,5))

//--Math.random--// 

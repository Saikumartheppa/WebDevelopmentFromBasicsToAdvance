// NN BB SS U    - > Primitives in JS
let a = null     // we need to explicitly declare a variable as null if we want to
let b = 3
let e = true
let f = BigInt(567) + BigInt(3)
let c = "Harry"
let d = Symbol("I'm a good symbol")
// let g = undefined -> we no need to explicitly declare a variable as undefined , becuase if we did'nt assigned any value to it , then by defualt value undefined
let g
console.log(a,b,c,d,e,f,g)
console.log(typeof d, d)

// Non - Primitive data types - Objects 
 const item = {
     "harry" : 23,
     "subh" :22,
     "sithal" : false,
     "rohan" : undefined
 } 
 console.log(typeof item["harry"])
 console.log(typeof item["sithal"])
//  The values of the object can be accessed by using ['key'] or by .key
 console.log(item["rohan"])
 console.log(item.sithal)
var a = 34      // global variable , accessible everywhere
var a = "JavaScript" // var can be redeclared
var b = "harry"
var c = null
var d = undefined
let e = 23   // block variable , accessible with the block
// let e = "JavaScript" // let can't be redeclared
const auth = "chintoo" 
//let auth = 5 // throws an error because constant can't be changed & redeclared
// auth = 5
//const res; // throws an error because constant must be initialized
console.log(5)
{
  a = "code"
  console.log(a)
  let e = "harry"
  console.log(e)
}
console.log(e)
console.log(a)
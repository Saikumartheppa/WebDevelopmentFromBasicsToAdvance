// Synchronous Programming -> Actions that initiate and finish one-by-one

// let a = prompt("What is your Gender");
// let b = prompt("What is your age");
// let c = prompt("What is your favourite color");
// console.log(a + b + c );

// Asynchronous Programming -> Actions that initiate now and finish Later
console.log("start");
setTimeout(function(){
    console.log("Asynchronous Example");
}, 3000);
console.log("end");
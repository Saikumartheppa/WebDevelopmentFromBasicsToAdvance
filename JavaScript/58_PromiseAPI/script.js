let p1  = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Promise 1");
    } , 10000)
});
let p2  = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Promise 2");
        // reject(new Error("Error"));
    } , 2000)
});
let p3  = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("Promise 3");
    } , 3000)
});

// p1.then((val) =>{
//     console.log(val + " resolved");
// });

// p2.then((val) => {
//     console.log(val + " resolved");
// });
// p3.then((val) => {
//     console.log(val + " resolved");
// });

// let promises = Promise.all([p1 , p2, p3]);  // if any promise fails or rejected, then promise will execute only failed one by throwing error.
// let promises = Promise.allSettled([p1, p2, p3]); 
// let promises = Promise.race([p1, p2, p3]);
// let promises = Promise.any([p1, p2, p3]);
// let promises = Promise.resolve([p1, p2, p3]);
let promises = Promise.reject([p1, p2, p3]);



promises.then((val) => {
    console.log(val);
}).catch((error) =>{
    console.log(error);
}) 
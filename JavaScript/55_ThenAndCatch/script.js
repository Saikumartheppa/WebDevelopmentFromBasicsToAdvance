console.log("Promise Started");
let p1  = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() =>{
        resolve(true);
    } , 5000)
});

let p2  = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() =>{
        reject(new Error("Got an error"));
    } , 5000)
});


//  To get the value
p1.then((value) =>{
   console.log(value);
});


// To Catch the Error
// p2.catch((error) => {
//     console.log(error);
// })

// then and catch in one go

p2.then((value) => {
    console.log(value);
}, (error) =>{
    console.log(error);
});

// If you more interested in Resolve then

let p3 = new Promise((resolve) =>{
    console.log("Promise is Pending");
    setTimeout(() => {
        resolve("06");
    } , 5000)
});
p3.then((value) => {
    console.log(value);
});


// If you more interested in reject then

let p4 = new Promise((Null, reject)=>{
    console.log("Promise is Pending");
    setTimeout(()=>{
       reject(new Error("Got an Error"));
    }, 5000);
});

p4.catch((error)=>{
    console.log("Error Handled");
});

console.log("Promise Started");
let p1  = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() =>{
        resolve(true);
    } , 5000)
});

p1.then((value) =>{
   console.log(value);
   return 1;
}).then((val)=>{
    setTimeout(()=>{
    console.log("3 secs " + val);
    }, 3000);
    return true;
}).then((value) => {
    setTimeout(()=>{
        console.log("2 secs" + value);
    }, 2000);
    return "Harry"
}).then((val) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
         resolve("We are Done");
        }, 5000);
    });
}).then((val) =>{
    console.log(val);
});

// Instead returning variables we can even return promises in a promise . eg :  last second custom promise from the above




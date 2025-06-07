let p1  = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() =>{
        resolve(true);
    } , 5000)
});

p1.then(() =>{
    console.log("Congratulations Your promise is resolved");
});

p1.then(() => {
   console.log("Second Handler");
});
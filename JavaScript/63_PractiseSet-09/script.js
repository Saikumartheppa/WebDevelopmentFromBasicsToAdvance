const loadScript = async (src) => {
    return new Promise((resolve, reject) => { 
        let script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(script);
        }
        script.onerror = () => {
            reject(new Error("Script load error"));
        }   
        document.head.appendChild(script);      
    });
}

const generateError = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("This is an error from generateError function"));
        }, 3000);
    });
}


// Using async/await to load a script dynamically
// This function will return a promise that resolves when the script is loaded successfully or rejects if there is an error.

//Problem 1
// Write a function that loads a script dynamically using async/await.
main1 = async ()=>{
    const p1 = await loadScript("https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js");
    console.log("Script loaded successfully: " + p1.src);

    // Never mix async/await with .then() or .catch() in the same promise chain.
    // If you want to use .then() and .catch(), you should not use await.
    // if you're using await then you waiting for the promise to resolve or reject, & you will get the resolved value directly. intead of a promise.


    // p1.then((script) => {
    //     console.log("Script loaded successfully: " + script.src);
    // }).catch((error) => {
    //     console.error("Error loading script: " + error.message);
    // }).finally(() => {
    //     console.log("This block always executes, regardless of success or failure");
    // });


    //Problem 2
    // Write a function that generates an error after 3 seconds using async/await.
    try {
        const p2 = await generateError();
        console.log(p2);
    } catch (error) {
        console.error("Error occurred: " + error.message);
    } finally {
        console.log("This block always executes, regardless of success or failure");
    }

}

main1();

// Problem 3

let promise1 = () => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("Promise 1 resolved");
        }, 2000);
    }); 
}
let promise2 = () => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("Promise 2 resolved");
        }, 1000);
    }); 
}
let promise3 = () => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("Promise 3 resolved");
        }, 3000);
    }); 
}

const executePromises = async () => {
    // console.time("run");
    // let p1 = await promise1();          
    // let p2 = await promise2();            
    // let p3 = await promise3();  
    // console.log(p1, p2 , p3);  
    // console.timeEnd("run");
    
    // this will print the time taken to execute all promises sequentially
    // run: 6000.000ms (or similar, depending on the execution time)
    let p1p2p3 = await Promise.all([promise1(), promise2(), promise3()]);
    console.log(p1p2p3);
    // this will print the time taken to execute all promises concurrently
}
executePromises();
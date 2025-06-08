setTimeout(() => {
    console.log("Time out one");   
}   , 1000);

// Asynchronous code execution with error handling using try-catch will not work as expected
// because the error will not be caught by the try-catch block. since try catch only works for synchronous code.

// try{
//     setTimeout(() => {
//         console.log(rahul);
//     }, 4000)
// }catch(err) {
//     console.log("Error caught: " + err);
// }

// Instead, we can handle the error inside the setTimeout callback function
    setTimeout(() => {
        try { 
            console.log(rahul);
        } catch (error) {
            console.log("Error caught: " + error);
        }
    }, 4000);

setTimeout(() => {
    console.log("Time out two");   
}   , 2000);
setTimeout(() => {
    console.log("Time out three");   
}   , 3000);
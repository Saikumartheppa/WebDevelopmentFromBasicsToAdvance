// This script demonstrates the use of the Error object and custom error handling in JavaScript.
// It includes examples of throwing and catching errors, as well as creating a custom error type.
let age = 17;
try {
    if(age < 18) {
        throw new ReferenceError("You are not old enough to vote.");
    }
} catch (error) {
    console.log("ErrorName : " + error.name);
    console.log("ErrorMessage : " + error.message);
    console.log("ErrorStack : " + error.stack);
    console.log("ErrorType : " + typeof error);
}

console.log("Script execution started.");
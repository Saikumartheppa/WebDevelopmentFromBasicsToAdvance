const f = () =>{
        try {
        console.log("Start of try block");
        // Simulating an error
        // return; // Uncomment this line to see the finally block execute without an error
        throw new Error("An error occurred in the try block");
    } catch (error) {
        console.log("Caught an error: " + error.message);
        // console.log(err);
    }finally {
        // finally block will always execute before the function returns
        console.log("This block always executes, regardless of an error");
    }
}
f();
console.log("End of script execution");
// The finally block will always execute, even if an error occurs in the try block.
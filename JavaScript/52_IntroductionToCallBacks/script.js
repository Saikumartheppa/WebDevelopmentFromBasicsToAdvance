// Synchronous Programming -> Actions that initiate and finish one-by-one

// let a = prompt("What is your Gender");
// let b = prompt("What is your age");
// let c = prompt("What is your favourite color");
// console.log(a + b + c );

// Asynchronous Programming -> Actions that initiate now and finish Later.
console.log("start");
setTimeout(function(){
    console.log("Asynchronous Example");
}, 3000);
console.log("end");

// Call Backs

// function loadScript(src, callback){
//     let script = document.createElement('script');
//     script.src = src;
//     document.body.appendChild(script);
//     script.onload = () =>{
//        console.log("Loaded Script with SRC  : " + src);
//        callback(src);
//     }
// }
// function hello(src){
//     alert("Hello world , " + src)
// }
// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" , hello);

// error handling

function loadScript1(src, callback){
    let script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
    script.onload = () =>{
       console.log("Loaded Script with SRC  : " + src);
       callback(src);
    }
    script.onerror = ()=>{
        console.log("Error loaded with SRC : " + src);
        callback(new Error("SRC got an error"));
    }
}  
function hello1(error , src){
    if(error){
        console.log(error);
        return;
    }
    alert("Hello world , " + src)
}
loadScript1("https://cdn.jsdelivr.net/npm/boosdsdutstrap@5.3.3/dist/js/bootstrap.bundle.min.js" , hello1); // invalid src
// loadScript1("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" , hello1); // valid src
let obj = {
    "name" : "Harry",
    "language" : "JavaScript",
    "source" : "Youtube",
    run : ()=>{
        alert("Obj Run");
    }
}


let p = {
    run : ()=>{
        alert("Run");
    }
}
p.__proto__ = {
    "age" : 25
}
obj.__proto__ = p;
obj.run();
console.log(obj.age);
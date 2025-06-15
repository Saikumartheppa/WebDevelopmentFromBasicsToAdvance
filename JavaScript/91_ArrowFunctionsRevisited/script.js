// const a = ()=> console.log("Hello");
// const a = (name)=> console.log(`Hellow ${name}`);
// const a = name => console.log(`Hellow ${name}`);
// const a = name =>{
//    console.log(`Hellow ${name}`);
//    console.log(name.length);
// }    

// const obj = {
//     userName : "Harry",
//     age : 34,
//     role : "Js Developer",
//     greet : function(){
//         setTimeout(function(){
//            console.log(`${this.userName} is a ${this.role}`); // In a Object Using a non arrow function inside a function , "this" not bound to actual Obj instead it refers to window object or null in a strict mode
//         }, 3000)
//     }
// }

// const obj = {
//     userName : "Harry",
//     age : 34,
//     role : "Js Developer",
//     greet : function(){
//         setTimeout(function(){
//            console.log(`${this.userName} is a ${this.role}`); 
//         }.bind(this), 3000);
//     }
// }

// const obj = {
//     userName : "Harry",
//     age : 34,
//     role : "Js Developer",
//     greet : function(){
//         const self = this;
//         setTimeout(function(){
//            console.log(`${self.userName} is a ${self.role}`); 
//         }, 3000);
//     }
// }


const obj = {
    userName : "Harry",
    age : 34,
    role : "Js Developer",
    greet : function(){
        setTimeout(()=>{
           console.log(`${this.userName} is a ${this.role}`); 
        }, 3000);
    }
}

obj.greet();
// a("Harry");


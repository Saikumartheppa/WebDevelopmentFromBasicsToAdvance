// let arr = [1 , 2];
// let[a , b , c] = arr;


// let arr = [2,4,5,6,7,8,34,134,35];
// let[a , b , c  , d , ...rest] = arr;
// console.log(a , b , c , d , rest);

// let arr = [2,4,5,6,7,8,34,134,35];
// let[a , , , b , ...rest] = arr;
// console.log(a , b , rest);

// const {a , b} = {a : 1 , b : 2};
// console.log(a , b );


let arr = [1, 3, 7, 5];
const obj = {...arr}

let sum = (a, b, c) =>{
    return a + b + c;
}
console.log(sum(...arr)); 

let obj2 = {
    username : "Harry",
    age : 34,
    address : "sadssfsdf"
}

console.log({...obj2 , username : "Harry2"});
console.log({username : "Harry2" , ...obj2}); // this wont work cause obj2 will overrides the username value



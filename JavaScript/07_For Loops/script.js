// For loop

// write a programme which generates the factorial of given number n using for loop
// let n = 5, fact = 1
// for(let i = 1; i <= n; i++){
//     fact *= i;
// }
// console.log("The factorial of given number n : ", fact)

// for in loop -> used to iterate over keys of the object if the object is iterable

let obj = {
    Harry : 23,
    alen : 25,
    priya : 29,
    hexa : 21,
    subh : 25
}

for(let ob in obj){
    console.log("Age of " + ob + " : " + obj[ob]);
}

// for of loop -> used to iterate over values of the object if the object is iterable
for (let ch of "Sairam"){
    console.log(ch)
}
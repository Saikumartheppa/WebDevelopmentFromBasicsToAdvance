let arr = [1,2,3,4,5,6,7] , arr2 = [21,1,1323,124,115,416,317] ;
/*
arr = arr.toString();   // converts an array to String 
console.log(arr, typeof arr);

let a = arr.join("-"); // separates the Array values by provided values & converts it in to a String
console.log(typeof a);

let l = arr.pop();    // pops out the last element from the array & returns it
console.log(l, typeof l , arr);

let l = arr.push(45);   // adds the elemnts at last of Array & returns length of array after insertion
console.log(l,typeof l ,  arr);

console.log(f , typeof f , arr);
let f = arr.shift();   // removes the first element from the array & returns  it


let f = arr.unshift(12);   // Adds the given element at  the first index of the array & returns length of array after insertion
console.log(f , typeof f , arr);
console.log(arr , arr.length);
// arr.pop();
arr.shift();
console.log(arr , arr.length);

console.log(arr , arr.length)
delete arr[1];      // Deletes the element at given index but length remains same after deletion
console.log(arr , arr.length)


let newArr = arr.concat(arr2)    // combines the array with provided arrays & returns the new array containing all the elements
console.log(newArr);


arr2.sort();      // sorts the array by lexo grahical order
console.log(arr2);

let compare = (a , b)=>{
    return a - b;   // asc
    // return b - a;   // desc
}
arr2.sort(compare);
console.log(arr2);



arr.reverse();
console.log(arr);


// splice & slice 

let num = [23,3,4,5,6,7,83];
// num.splice(2, 2, 101,102,103);    // Splice takes 3 parameters idx for where to start, no .of elements to be deleted , elements to be added , & returns the deleted elements in form array & changes are done to original array 
let deletedValues = num.splice(2, 2, 101,102,103);
console.log(deletedValues);

*/

let num = [23,3,4,5,6,7,83];
// let newNum = num.slice(3);   // changes does not effect the original array , but creates a new array from given idx to last idx of orignal array & returns it
let newNum = num.slice(3, 6);
console.log(newNum);
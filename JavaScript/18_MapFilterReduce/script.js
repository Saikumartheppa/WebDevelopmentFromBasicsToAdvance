let nums = [34,54,76,87,23,14];

/*

// map  -> used to manipulate the values of the array & returns the result in new array & changes does not effect original array

let a = nums.map((value, idx , array) => {
    console.log(value , idx , array);
    return value * 10;
});
console.log(a);



// filter  -> used to filter the elements on provided condition & returns the result in new array & changes does not effect original array


let evenNumbers = nums.filter((value) => {
    return value % 2 == 0;
})
console.log(evenNumbers);



// reduce
const addition = (val1, val2) => {
    return val1 + val2;
};
let arr = [1,2,3,4,5,6];
let sum = arr.reduce(addition);
console.log(sum);
*/
let arr = [1,2,3,4,5,6];
let sum = arr.reduce((val1 , val2)=> {
    return val1 + val2;
});
console.log(sum);
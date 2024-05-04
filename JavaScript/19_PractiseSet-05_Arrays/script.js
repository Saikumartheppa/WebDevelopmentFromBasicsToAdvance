//    Practise Set 05 - Arrays

/*
1. Create an Array of numbers & take input from the user to add numbers to the Array
2. Keep adding the numbers to the array untill 0 is added to array
3. filter the numbers divisible by 10 from the given array
4. Create an array of square of given numbers
5.Use reduce to calculate factorial of given numbers from an array  

// problem 1
let nums = [2,23,4,5,67,54,32,54,65,21];
let input = [3,2,5,6,7,8,9,1];
console.log(nums);
nums = nums.concat(input);
console.log(nums);

// problem 2

let nums = [2,23,4,5,67,54,32,54,65,21];
let inputArray = [3,2,5,6,7,0,8,9,1];
console.log(nums);

// sol 1

for(let i = 0; i < inputArray.length ; i++){
    nums.push(inputArray[i]);
    if(inputArray[i] == 0){
        break;
    }
}
console.log(nums);

// sol 2

for(let inp in inputArray){
    nums.push(Number.parseInt(inp));
}
console.log(nums);


// problem 3

let nums = [20,23,40,5,670,540,32,54,650,21];
let numbersDivisibleBy10 = nums.filter((num)=>{
    return num % 10 == 0;
});

console.log(numbersDivisibleBy10);


// problem 4

let nums = [2,3,4,5,6,7,8];
let squares = nums.map((ele) => {
    return ele * ele;
});
console.log(squares);


// problem 5

let nums = [1,2,3,4,5];

let fact = nums.reduce((val1 , val2 ) => {
    return val1 * val2;
});
console.log(fact);


*/
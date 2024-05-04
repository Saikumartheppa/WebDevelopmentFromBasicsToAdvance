let nums = [23,32,1,3,4,5,7];
/*
for(let i = 0; i < nums.length; i++ ){
    console.log(nums[i]);
}


nums.forEach((Element) =>{
    console.log(Element);
});


let str = "Web-dev";
let arr = Array.from(str);                // converts the provided value to an array
console.log(arr); 



for(let n of nums){
    console.log(n);
}

*/



for(let n in nums){
    console.log(n , nums[n]);
}
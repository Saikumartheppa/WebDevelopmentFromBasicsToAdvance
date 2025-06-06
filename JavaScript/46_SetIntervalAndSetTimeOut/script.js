alert("Hey How are you!!!!!!!!!!")


let timerId = setTimeout(function(){
    alert("I am inside TimeOut")
} , 5000);

let conf = confirm("Do you want to clear the time out");
if(conf){
    clearTimeout(timerId);
}
console.log(timerId);

const sum = (a , b ) => {
    alert("Adding the elements")
    console.log("Adding the Elements" , (a + b));
    return sum;
}
setTimeout(sum , 5000, 5,6);
console.log(sum);

let timerId = setInterval(function(){
    alert("This is Set Interval Function")
}, 3000);
console.log(timerId);

setInterval(sum , 3000, 4,5);

let conf = confirm("Do you want to clear the interval");
if(conf){
    clearInterval(timerId);
}
console.log(timerId);



// const twoSecsDelay = (param1)=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//         resolve(param1);
//         }, 2000) 
//     })
// }
// (async ()=>{
//     let hello = await twoSecsDelay("Hello......");
//     console.log(hello);
//     let world = await twoSecsDelay("world......");
//     console.log(world);
// }
// )()
// twoSecsDelay("Hello" , "World");

const nSecsDelay = (n)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        resolve(n);
        }, n * 1000) 
    })
}

(async ()=>{
   let p1 = await nSecsDelay(3);
   console.log(`Printing after : ${p1}  secs`);
   let p2 = await nSecsDelay(2);
   console.log(`Printing after : ${p2}  secs`);
   let p3 = await nSecsDelay(5);
   console.log(`Printing after : ${p3}  secs`);
   
})
()

let arr = [1,2,3,4,5,6,7,8,9];
console.log(average(...arr));

function average(a,b,c){
    return (a + b + c ) / 3;
}

let interest = calculateInterest(10000, 2 , 3);
console.log(interest);

function calculateInterest(amount , interestPercentage , months){
    return months * amount * interestPercentage / 100;
}
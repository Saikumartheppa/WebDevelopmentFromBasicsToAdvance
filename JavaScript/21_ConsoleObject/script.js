// console.log("log");
// console.error("error");
// console.info("info");
// console.assert(3 % 2 == 0);
// console.log(console);
// console.clear();

// let marks = {
//     a : 12,
//     b : 20,
//     c : 32
// }

// console.table(marks);

console.time("a")
console.warn("Sweet Warning");
// console.time("a")

console.time("ForLoop");
for(let i = 0; i < 5; i++){
    console.log(43);
}
console.timeEnd("ForLoop");
console.time("WhileLoop");
let i = 0
while(i < 5){
    console.log(43);
    i++;
}
console.timeEnd("WhileLoop");
let id1 = document.getElementById("id1");
let para = document.getElementById("para");

console.log(id1.matches(".harry"));
// console.log(id1.matches(".box"));

console.log(id1.closest(".container"));
console.log(id1.closest(".box"));


console.log(para.contains(para));

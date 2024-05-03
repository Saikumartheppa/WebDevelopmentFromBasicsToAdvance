let marks = [91,82,83,84,null,"Absent", false];

marks[11] = 89    // Adding a new value to the Array

marks[4] = 95; // changing the value at a index which is already stored in the Array

console.log(marks);
console.log(marks.length);
console.log(marks[15]);    // when u try to get element of index which is greater than array length , it will gave u undefined


console.log(typeof marks); // Array is not a primitive data type , it is an Object
/*
for(let i = 0; i < marks.length; i++){
    console.log(marks[i]);
}


marks.forEach(m => {
    console.log(m);
});


for(let m in marks ) {
   console.log(marks[m]);
}


for(let m of marks)
console.log(m);
console.log("Marks");
console.log("Marks");
console.log("Marks");
console.log("Marks");
console.log("Marks");
console.log("Marks");

*/
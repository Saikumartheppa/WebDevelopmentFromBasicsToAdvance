
let myName = "Srinivas";
// console.log(myName);
// console.log(myName.length);
console.log(myName[6]);

let friend = 'RajKumar';
console.log("Friend " , friend);
console.log(friend.length);

// Template Literals

let boy1 = "Alex" , boy2 = "Bob"
// print boy1 is a friend of boy2 
let sentence = `${boy1} is a friend of ${boy2}`;     // We can insert a variable in to a template literal is called String interpolation
console.log(sentence);


// Escape Sequence

let fruit = 'Papa\ya';
console.log(fruit);
console.log(fruit.length);
let fruit1 = 'Bana\nna';
console.log(fruit1);
console.log(fruit1.length);

// let fruit2 = "WaterMe\tlon";
// console.log(fruit2);
// console.log(fruit2.length);

let fruit2 = "WaterMe\rlon";
console.log(fruit2);
// console.log(fruit2.length);
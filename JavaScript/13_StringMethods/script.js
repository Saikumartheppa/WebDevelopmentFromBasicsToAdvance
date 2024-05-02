let myName = "Steve"
// console.log(myName.length);     // -> length is a property , so we didn't specified "()"

/*
let myName = "Sriniv\"as"        // \" Escape Sequence Character -> counted as 1 Character
console.log(myName.length);
*/
/*
console.log(myName.toUpperCase())  // -> toUpperCase is a function , to invoke a function we use name of function followed by "()"  
console.log(myName.toLowerCase());

console.log("slice : " , myName.slice(2,4));  // slice is a similar function as substring function in java 

console.log("slice : " , myName.slice(2));    // creates a substring from given index till the last index of the String

console.log(myName.replace("Theppa" , "Rajeshwari"));   // replace() is  case sensitive , it replaces all the occurrences Specified String with given String

let wife = "Alexandria";

console.log(wife.concat(" is wife of " ,myName , " Ok!! ", 5));   // concat -> it just adds the given values to the specified String
console.log(wife);


let val = "       alpha      ";
console.log(val.trim())    // trim -> trim deletes the empty spaces if any present from starting and ending of the String

*/

let s = "Web-Dev";
for(let i = 0; i < s.length; i++){
    // ans.concat(s[i]);
    // console.log(ans);
    // console.log(s[i]);
    console.log(s.charAt(i));
}

// let a = "5"
// a = Number.parseInt(a)
// console.log(a)
// console.log(typeof a)

let age = 19;
if(age < 0){
    console.log("Invalid Age");
}else if(age <= 9){
    console.log("you are kid Don't think about driving")
}else if(age >= 9 && age < 18){
    console.log("Think about driving after 18")
}else{
    console.log("You can drive")
}

//   Ternary Operator
console.log("You can ", age < 18 ? "not drive" : "drive")

//  Switch Statements
 
const fruits = ""
switch(fruits){
    case 'Papayas':
        console.log("The cost of 1KG Papayas : 50 rupees")
        break;
    case 'Bananas':
        console.log("The cost of 12 Bananans : 80 rupees")
        break;
    default:
        console.log("We are out of : " , fruits)
}

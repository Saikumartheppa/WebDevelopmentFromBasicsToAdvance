//    Practise Set-03 Loops and Functions

let marks = {
    harry : 25,
    hexa : 24,
    alex : 21,
    subh : 22
}
// 1. Write a program to print the marks of the student in an object using for loop

for(let i = 0; i < Object.keys(marks).length; i++){
    console.log("Marks of the student " , Object.keys(marks)[i] , " : ", marks[Object.keys(marks)[i]]);
}

// 2. Write a program for Question 1 using for in loop

for(let m in marks){
     console.log("Marks of the student ", m , " : ", marks[m]);
}

// 3.Write a program to print "Try-Again" until  user enters correct number

let correctNumber = 5, i = 0;
while(i != correctNumber){
    console.log("Try-Again ");
    i++;
}
console.log(i);
// 4. Write a function to find mean of the 5 numbers

let mean = (a,b,c,d,e) => {
    let sum = a + b + c + d + e;
    return sum / 5;
}

console.log("The mean of 1,2,3,4,5 is : " , mean(1,2,3,4,5));
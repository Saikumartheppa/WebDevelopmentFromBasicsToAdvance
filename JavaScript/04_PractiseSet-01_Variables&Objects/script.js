 //                    Practise Questions 

// 1. Create a Variable type of String & try to add a number to it ?
// 2. Use type of operator to find the data type of the string used in the last question
// 3.Create a const object in JS , can you change it to  hold a number later 
// 4.Try to add a new key to the const object used in  qstn 3 , were you able to do it
// 5.Write a JS program to create a word meaning dictionary of 5 words


// qstn 1
let a = "Harry"
let b = "sonu"
a +=  123
console.log(a)

// qstn 2
console.log(typeof a)
console.log(typeof (b+6))

// qstn 3

const item = {
     name : "Harry",
     age : 26,
     maritalStatus : false
}
// item = 23
//  U cannot re - asign a const variable 

// qstn 4
// You can add new key to the const object because item is just reference of the object and we are changing the inner value of the object
item['degree'] = "Bachelors"
item['name'] = "Sonu"
console.log(item)

// qstn 5

const dict = {
    yakka : "work , Expecially Hard work",
    mendicant : "a pauper who lives by begging",
    vitiate : "make imperfect",
    hoary : "having gray or white hair as with age",
    parry : "avoid or try to avoid fulfilling, answering, or performing"
}
console.log(dict)
console.log(dict['yakka'])
console.log(dict.parry)

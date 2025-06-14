class Complex{
    constructor(real , imaginary){
        this._real = real;
        this._imaginary = imaginary;
    }
    sumOfComplexNumbers(given){
        this._real  = this._real + given.real;
        this._imaginary =  this._imaginary + given.imaginary; 
    }
    get real(){
        return this._real;
    }
    get imaginary(){
        return this._imaginary;
    }
    set real(newRealNumber){
        this._real = newRealNumber;
    }
    set imaginary(newImaginaryNumber){
        this._imaginary = newImaginaryNumber;
    }
}
let a = new Complex(2,4);
let b = new Complex(6, 2);
a.sumOfComplexNumbers(b)
a.real = 10;
console.log(a.real);


// class Human{
//     constructor(name , age , gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     currentStatus(){
//         console.log(`${this.name}  is playing football`);
//     }
// }
// class Student extends Human{
//     currentStatus(){
//         console.log(`${this.name}  is Studying`);
//     }
// }

// let harry = new Human("Harry" , 27 , "Male");
// let prasad = new Student("Prasad" , 24 , "Male");
// harry.currentStatus();
// prasad.currentStatus();
// console.log(prasad instanceof Human);
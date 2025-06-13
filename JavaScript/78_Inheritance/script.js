class Animal{
    constructor(name , age , gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat(){
        console.log(`${this.name}  is eating food`);
    }
    sleep(){
        console.log(`${this.name}  is sleeping peacefully`);
    }
    move(){
        console.log(`${this.name}  is moving`);
    }
}

class Dog extends Animal{
    bark(){
        console.log(`${this.name}  is Barking`);
    }
}

let cat = new Animal("kitten" , 5 , "Male");
let pitbull = new Animal("Rocky" , 10 , "Male");
let dobberMan = new Dog("Steve" , 7 , "female");

cat.eat();
pitbull.move();
// pitbull.bark();
dobberMan.move();
dobberMan.bark();
dobberMan.sleep();

class Animal{
    constructor(name , skill){
        this.name = name;
        this.skill = skill;
    }
    get getName(){
        return this.name;
    }
    set setName(name){
        this.name = name;
    }
    walk(){
        console.log("Walking");
    }
}

class Rabbit extends Animal{

}
let cat = new Animal("Jack" , "Reactions");
let rabbit = new Rabbit("Jack" , "Running");
cat.walk();
console.log(cat.name);
cat.name = "Bruno";
console.log(cat.name);
let dog = null;
console.log(cat instanceof Animal);
console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(dog instanceof Animal);

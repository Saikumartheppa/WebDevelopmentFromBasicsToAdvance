class Employee{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    login(){
        console.log(`${this.name}  Logged in Successfully`);
    }
    logout(){
        console.log(`${this.name}  Logged out Successfully`);
    }
}

class newEmployee extends Employee{
    constructor(name , age , role){
        super(name , age);
        this.role = role;
    }  
    login(){
        console.log(`${this.name} is Logged in 10 minutes Earlier`);
    }
    designation(){
        console.log(`${this.name}  designation is  ${this.role}`);
    }
}

let oldEmployee = new Employee("Kumar" , 25);
let newEmp = new newEmployee("Sai" , 24 , "FrontEnd Dev");

oldEmployee.login();
oldEmployee.logout();
newEmp.login();
newEmp.designation();
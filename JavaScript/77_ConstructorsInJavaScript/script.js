class RailwayForm{
    constructor(givenName , trainNumber){
        console.log("Constructor called");
        this.name = givenName;
        this.trainNumber = trainNumber;
    }
    submit(){
        alert(`${this.name} submitted  form for Train number : ${this.trainNumber}`);
    }
    cancel(){
       alert(`${this.name} cancelled form for Train number : ${this.trainNumber}`);
    }
}

let harry = new RailwayForm("Harry", 143213);
let roshan = new RailwayForm("Roshan" , 321240);
let roshan1 = new RailwayForm("Roshan1" , 234420);
harry.submit();
roshan.submit();
roshan1.submit();
roshan1.cancel();

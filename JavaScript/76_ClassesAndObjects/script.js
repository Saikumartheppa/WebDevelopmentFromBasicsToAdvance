class RailwayForm{
    submit(){
        alert(`${this.name} submitted  form for Train number : ${this.trainNumber}`);
    }
    cancel(){
       alert(`${this.name} cancelled form for Train number : ${this.trainNumber}`);
    }
    fill(givenName , trainNumber){
        this.name = givenName;
        this.trainNumber = trainNumber;
    }
}

let harry = new RailwayForm();
let roshan = new RailwayForm();
let roshan1 = new RailwayForm();
harry.fill("Harry", 143213);
harry.submit();
roshan.fill("Roshan" , 321240);
roshan.submit();
roshan1.fill("Roshan1" , 234420);
roshan1.submit();
roshan1.cancel();

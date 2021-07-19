//interfaces
interface PersonName1{
    name: string;
}

interface PersonName2{
    get name(): string;
}

//classes
class Human {
    gender: string;

    printData(gender:string) {
        console.log("Gender: " +gender);
    }
}

class Person extends Human implements PersonName1, PersonName2{
   private _name: string;
    constructor(gender :string , aName:string){
        super();
        this._name = aName;
    }

    //getter and setter for the name
    get name(){
       return (this._name);
    }
    set name(value){
        this._name = value;
    }

    //overide printData method
    printData(gender:string) {
        console.log("Gender: " +this.gender + " and name: " + this._name);
    }
}

// ex7 question 5
const user = {
    name: "Hayes",
    id: 0
  };
  
  const student = {
    fistName: "Costas",
    lastName: "Zeimpekis"
  };
  
  const grades = {
    math: 20,
    chemistry: 20,
    history: 30
  };

  //user.gender = "male";
  user["gender"] = "male";
  
// ex7 question 6
interface Entity{
    [prop : string] : any;
}

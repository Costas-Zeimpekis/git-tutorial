interface PersonNumOne {
    name: string;
}

interface PersonNumTwo {
    get name(): string;
}

class Human {
    // gender: string;
    constructor(public gender: string){}
    printData() {
        console.log("gender" + this.gender);
    }
}

class Person extends Human implements PersonNumOne, PersonNumTwo {
    // private _name: string;
    constructor(private _name: string){
        super(_name)
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;;
    }
}
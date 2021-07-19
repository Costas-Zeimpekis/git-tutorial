import { Calculator } from "./interfaces";

export class Animal{
    origins: string;
    constructor(origins : string){
        this.origins = origins;
    }
}

export default class Dog extends Animal{
    breed: string;
    hairColor: string;
    constructor(origins : string, breed: string, hairColor: string){
        super(origins);
        this.breed = breed;
        this.hairColor = hairColor;
    }
}

export function calculator( param: Calculator) {
    let result;
    if (param.type === "addition"){
        result = Number(param.num1) + Number(param.num2);
    }
    else if (param.type === "substraction"){
        result = Number(param.num1) - Number(param.num2);
    }
    else if (param.type === "multipication"){
        result = Number(param.num1) * Number(param.num2);
    }
    else if (param.type === "division"){
        result = Number(param.num1) / Number(param.num2);
    }
    return result;
}

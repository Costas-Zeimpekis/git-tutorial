import { Calc } from './interface.js'


class Animal {
    constructor(public origin:string){}
}

export default class Dog extends Animal {
    constructor(public hairColor:string, public breed?: string ) {
        super(origin)
    }
}

function calc(obj: Calc){
    let result: number;
    switch(obj.type) {
        case 'addition':
            result = obj.number1 + obj.number2;
            break;
    
        case 'subtraction':
            result = obj.number1 - obj.number2;
            break;

        case 'multiplication':
             result = obj.number1 * obj.number2
             break;

        case 'division':
            result = obj.number1 / obj.number2
            break;

        default:
            result = 0;
}
    return result;
};

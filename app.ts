// Exercise 1: Write a tuple of string and number;
let tuple: [string,number];
tuple = ['hello', 22];

// Write a pure arrow function that returns a number.
let num = (number: number) => number;

num(2);

// Write a function that returns a string
function myName(name:string) {
    return name;
}

myName('George');

// Write a function that returns a void.
function printMessage(message: string){
    console.log('this is void');
}


// Write an interface of the an object. const person = {name: 'costas', age: 40, address: { str: 'lala 40', city: 'Thessaloniki', post: 55132}}


interface Person1 {
    name: string;
    age: number;
    address: any;
}

const person1: Person1 = {
    name: 'Costas',
    age: 40,
    address: {
        str: 'lala 40',
        city: 'Thessaloniki',
        post: 55132
    }
}

// Write a class Person. it takes name and age and has a method that walk that prints walk. Make an instance from that class

class Person {
   
    constructor(private name: string, private age: number) {
    }

    walk(){
        console.log('Walk')
    }
}

const person = new Person('george', 30);
"use strict";
// Exercise 1: Write a tuple of string and number;
let tuple;
tuple = ['hello', 22];
// Write a pure arrow function that returns a number.
let num = (number) => number;
num(2);
// Write a function that returns a string
function myName(name) {
    return name;
}
myName('George');
// Write a function that returns a void.
function printMessage(message) {
    console.log('this is void');
}
const person1 = {
    name: 'Costas',
    age: 40,
    address: {
        str: 'lala 40',
        city: 'Thessaloniki',
        post: 55132
    }
};
// Write a class Person. it takes name and age and has a method that walk that prints walk. Make an instance from that class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    walk() {
        console.log('Walk');
    }
}
const person = new Person('george', 30);

import {posts as getPosts, comments as getComments } from './api';

class Animal{
    origins: string;
    constructor(origins : string){
        this.origins = origins;
    }
}

class Dog extends Animal{
    breed: string;
    hairColor: string;
    constructor(origins : string, breed: string, hairColor: string){
        super(origins);
        this.breed = breed;
        this.hairColor = hairColor;
    }
}
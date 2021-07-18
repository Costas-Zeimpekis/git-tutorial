import {posts as getPosts, comments as getComments } from './api';
import Pet from './helper';
import {calculator} from "./helper";

console.log(getPosts);
console.log(getComments);

const bulldog = new Pet("Germany", "female", "brown");

const result = calculator({num1: 10, num2: 6, type: "addition"});
console.log(result);
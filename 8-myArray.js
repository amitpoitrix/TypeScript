"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Declaring array of string/number type
var superHeros = [];
// const heroPower: number[] = [];
superHeros.push("spiderman");
superHeros.push("batman");
superHeros.push("flash");
console.log("superHeros: ", superHeros);
// 2. Another way to declare array type
var heroPower = [];
heroPower.push(2);
heroPower.push(3);
heroPower.push(1);
heroPower.pop();
console.log("heroPower: ", heroPower);
var allUsers = [];
allUsers.push({ name: "Aman", isActive: false });
allUsers.push({ name: "Amit", isActive: true });
console.log("allUsers: ", allUsers);
// 4. Declaring and initializing 2D array type
var MLModels = [
    [255, 255, 255],
    [12, 45],
    [16]
];
console.log("MLModels: ", MLModels);

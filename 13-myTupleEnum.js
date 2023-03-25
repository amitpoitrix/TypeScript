"use strict";
// TypeScript Tuples are basically ordered form of array with predefined types
Object.defineProperty(exports, "__esModule", { value: true });
// const user: (string | number)[] = [1, "hc"]
// 1. Creating a tuple of different data type
var tUser;
tUser = ["hc", 131, true];
console.log('tUser: ', tUser);
// 2. Creating a tuple of same data type
var rgb = [255, 123, 112];
console.log('rgb: ', rgb);
var newUser = [112, "example@google.com"];
newUser[1] = "hc.com"; // We can change the ith value 
newUser.push("abc");
newUser.push(123);
console.log('newUser: ', newUser);

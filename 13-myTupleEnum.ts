// TypeScript Tuples are basically ordered form of array with predefined types

// const user: (string | number)[] = [1, "hc"]
// 1. Creating a tuple of different data type
let tUser: [string, number, boolean];
tUser = ["hc", 131, true];
console.log('tUser: ', tUser);

// 2. Creating a tuple of same data type
let rgb: [number, number, number] = [255, 123, 112];
console.log('rgb: ', rgb);

// 3. Creating tuple using type
type User = [number, string]
const newUser: User = [112, "example@google.com"]
newUser[1] = "hc.com";  // We can change the ith value 
// newUser.push("abc"); // this is also possible but it should restrict
// newUser.push(123);
console.log('newUser: ', newUser);

export {};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 1. creating object
var User = {
    name: "amit",
    email: "amit@lco.dev",
    isAvtive: true
};
// 2. function with parameter accepting as object
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// here this email will throw error
// createUser({name: "amit", isPaid: false, email: "a@a.com"}); 
// but if this object store in variable than it won't - STRANGE
var newUser = { name: "amit", isPaid: false, email: "a@a.com" };
createUser(newUser);
// 3. function with return type as object with exact property mentioned
function createCourse() {
    return { name: "reactjs", price: 399 };
}

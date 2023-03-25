"use strict";
// TypeScript Narrowing: Narrow down to specific type
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Narrowing down into number and string type
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
// 2. Narrowing down into string and null type
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
// 3. Narrowing down into string, string[] and null type
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    // use of 'in' operator to check whether particular property is present in interface or not
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
// 5. Use of 'instanceof' operator to check whether particular value is an instance of any class 
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// Making function type truthy for Fish using 'is'
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet; // here we're sure that pet is of type Fish
        return "fish food";
    }
    else {
        pet; // here we're sure that pet is of type Bird
        return "bird Food";
    }
}
// Not able to handle here
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    //return shape.side * shape.side
}
// handles properly here
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            var _defaultforshape = shape;
            return _defaultforshape;
    }
}

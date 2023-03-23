"use strict";
// The files created in TypeScript have global access, which means variables, function interface, class defines in 1 files can be accesible in another files.
// We can make use of export and import module functionality which can be used to avoid global variable, function conflict.
Object.defineProperty(exports, "__esModule", { value: true });
exports.myClass = exports.myFunc = exports.x = void 0;
// In order to run .ts file containing import and export command, use below command to compile
// tsc --module commonjs fileName.ts
// variable
exports.x = 10;
// function
function myFunc() {
    console.log('This is a simple function');
}
exports.myFunc = myFunc;
// class
var myClass = /** @class */ (function () {
    function myClass(a, b) {
        var _this = this;
        // In TypeScript, for arrow function we don't require return type
        this.add = function () {
            return _this.a + _this.b;
        };
        this.a = a;
        this.b = b;
    }
    return myClass;
}());
exports.myClass = myClass;

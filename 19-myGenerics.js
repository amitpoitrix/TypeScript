"use strict";
// TypeScript Generics: Use to create reusable components 
Object.defineProperty(exports, "__esModule", { value: true });
// Generics use this <T> syntax
var score = [];
var names = [];
// 1. A function which accepts arguement of type boolean or number and return with same type
function identityOne(val) {
    return val;
}
// 2. A function which accepts arguement of type any and return with any type
function identityTwo(val) {
    return val;
}
// 3. Generics: A function which accepts arguement of type 'Type' and return with same type 'Type'
function identityThree(val) {
    return val;
}
console.log('3. identityThree: ', identityThree(true));
// 4. Same generic function as above with 'Type' as 'T'
function identityFour(val) {
    return val;
}
// Calling generic function with interface type
console.log('4. identityFour: ', identityFour({
    brand: "",
    type: 0
}));
// 5. Generic function acception args of type Array<T> or T[] and return type is T or it can be T[] or Array<T>
function getSearchProducts(products) {
    // do some database operations
    var myIndex = 1;
    return products[myIndex];
}
console.log('5. getSearchProducts: ', getSearchProducts(['apple', 'mango']));
// We can use <T,> also in code 
var getMoreSearchProducts = function (products) {
    //do some database operations
    var myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
console.log('6. anotherFunction: ', anotherFunction(3, {
    connection: "mongodBD",
    username: "amit",
    password: "abc"
}));
// interface Quiz{
//     name: string,
//     type: string
// }
// interface Course{
//     name: string,
//     author: string,
//     subject: string
// }
// 7. Generic Class
var Sellable = /** @class */ (function () {
    function Sellable() {
        this.cart = [];
    }
    Sellable.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return Sellable;
}());

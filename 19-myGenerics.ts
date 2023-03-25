// TypeScript Generics: Use to create reusable components 

// Generics use this <T> syntax
const score: Array<number> = [];
const names: Array<string> = [];

// 1. A function which accepts arguement of type boolean or number and return with same type
function identityOne(val: boolean | number): boolean | number{
    return val;
}

// 2. A function which accepts arguement of type any and return with any type
function identityTwo(val: any):any{
    return val;
}

// 3. Generics: A function which accepts arguement of type 'Type' and return with same type 'Type'
function identityThree<Type>(val: Type): Type {
    return val;
}
console.log('3. identityThree: ',identityThree(true));

// 4. Same generic function as above with 'Type' as 'T'
function identityFour<T>(val: T): T {
    return val;
}
// Creating interface for type T 
interface Bottle {
    brand: string,
    type: number
}
// Calling generic function with interface type
console.log('4. identityFour: ',identityFour<Bottle>({
    brand: "",
    type: 0
}))

// 5. Generic function acception args of type Array<T> or T[] and return type is T or it can be T[] or Array<T>
function getSearchProducts<T>(products: T[]): T {
    // do some database operations
    const myIndex = 1;
    return products[myIndex];
}
console.log('5. getSearchProducts: ', getSearchProducts(['apple', 'mango']));

// We can use <T,> also in code 
const getMoreSearchProducts = <T,>(products: T[]): T => {
    //do some database operations
    const myIndex = 4;
    return products[myIndex];
}

// 6. Generic function that extends its type from interface and return object
interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U): object {
    return {
        valOne,
        valTwo
    }
}

console.log('6. anotherFunction: ', anotherFunction(3, {
    connection: "mongodBD",
    username: "amit",
    password: "abc"
}))


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
class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}

export {};
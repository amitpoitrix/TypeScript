// The files created in TypeScript have global access, which means variables, function interface, class defines in 1 files can be accesible in another files.
// We can make use of export and import module functionality which can be used to avoid global variable, function conflict.

// In order to run .ts file containing import and export command, use below command to compile
// tsc --module commonjs fileName.ts


// variable
export var x: number = 10;

// function
export function myFunc(): void{
    console.log('This is a simple function');
}

// class
export class myClass{
    a: number;
    b: number;

    constructor(a: number, b:number){
        this.a = a;
        this.b = b;
    }

    // In TypeScript, for arrow function we don't require return type
    add = () => {
        return this.a + this.b;
    }
}
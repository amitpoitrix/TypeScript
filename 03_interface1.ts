// Interface in TypeScript

// 1. Interface is a structure that defines the contract in your application.
// 2. It defines syntax for the class to follow.
// 3. The TypeScript compiler doesn't convert interface to JavaScript. It uses interface for type checking. This is also known as "duck typing" or "structural subtyping".
// 4. An interface is define with the keyword interface and it can include properties and method declarations using a function or an arrow function.
// 5. An interface extends another interface.
// 6. A class implement interface.


interface IEmployee{
    empName: string;
    empID: number;
    empSal: number;
    display: () => void;    // Arrow function type declaration
}

var emp: IEmployee = {
    empName: "Amit",
    empID: 123,
    empSal: 1234123,
    display(): void {
        console.log(this.empName + " " + this.empID + " " + this.empSal);
    }
}

console.log(emp.empName);
console.log(emp.empID);
console.log(emp.empSal);

emp.display();
// Inheritance in TypeScript

// 1. Inheritance is acquiring all the variables and methods from one class to another class.
// 2. It helps to reuse the code and establish relationship between different classes:
    // i) Parent Class (Super or Base Class)
    // ii) Child Class (Subclass or Derived Class)
// TypeScript classes can be extended to create new classes with inheritance, using the keyword extends.

class Person{
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

class Employees extends Person{
    empNo: number;

    constructor(empNo: number, name: string){
        super(name);
        this.empNo = empNo;
    }

    display(): void{
        console.log(this.empNo);
        console.log(this.name);
    }
}

var emp2 = new Employees(123, "Amit");
emp2.display();
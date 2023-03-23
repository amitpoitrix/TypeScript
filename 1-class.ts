// Class in TypeScript
// A class can includes:
// 1. class variables
// 2. Methods(if function is define inside class its called method)
// 3. constructor - which automatically invoke during creation of class object

class Employee{
    eid: number;
    ename: string;
    deptNo: number;

    constructor(eid: number, ename: string, deptNo: number){
        this.eid = eid;
        this.ename = ename;
        this.deptNo = deptNo;
    }

    display(): void{
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.deptNo);
    }
}

var emp1 = new Employee(123, "Amit", 223);
emp1.display();
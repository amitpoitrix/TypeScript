// Class in TypeScript
// A class can includes:
// 1. class variables
// 2. Methods(if function is define inside class its called method)
// 3. constructor - which automatically invoke during creation of class object
var Employee = /** @class */ (function () {
    function Employee(eid, ename, deptNo) {
        this.eid = eid;
        this.ename = ename;
        this.deptNo = deptNo;
    }
    Employee.prototype.display = function () {
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.deptNo);
    };
    return Employee;
}());
var emp1 = new Employee(123, "Amit", 223);
emp1.display();

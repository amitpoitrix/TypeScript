// Interface in TypeScript
var emp = {
    empName: "Amit",
    empID: 123,
    empSal: 1234123,
    display: function () {
        console.log(this.empName + " " + this.empID + " " + this.empSal);
    }
};
console.log(emp.empName);
console.log(emp.empID);
console.log(emp.empSal);
emp.display();

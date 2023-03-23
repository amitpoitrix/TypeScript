// Inheritance in TypeScript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 1. Inheritance is acquiring all the variables and methods from one class to another class.
// 2. It helps to reuse the code and establish relationship between different classes:
// i) Parent Class (Super or Base Class)
// ii) Child Class (Subclass or Derived Class)
// TypeScript classes can be extended to create new classes with inheritance, using the keyword extends.
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employees = /** @class */ (function (_super) {
    __extends(Employees, _super);
    function Employees(empNo, name) {
        var _this = _super.call(this, name) || this;
        _this.empNo = empNo;
        return _this;
    }
    Employees.prototype.display = function () {
        console.log(this.empNo);
        console.log(this.name);
    };
    return Employees;
}(Person));
var emp2 = new Employees(123, "Amit");
emp2.display();

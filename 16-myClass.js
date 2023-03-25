"use strict";
// TypeScript Class
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
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Class declaration along with defination
var User = /** @class */ (function () {
    function User(email, name) {
        this.city = "Jaipur"; // readonly once assign can't reassign again
        this.email = email;
        this.name = name;
    }
    return User;
}());
var userData = new User('amit@a.co', 'amit');
// 2. Production level class defination in .ts
var UserP = /** @class */ (function () {
    // Here, by providing access modifier in arguement helps to not to declare variables(class property) separately 
    function UserP(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1; // protected variables/ methods are only accessible in current as well as inherited class
        this.city = "Jaipur";
    }
    // private method: only accessible in current class
    UserP.prototype.deleteToken = function () {
        console.log("Token deleted");
    };
    Object.defineProperty(UserP.prototype, "getAppleEmail", {
        // Getter method using 'get' keyword and return type is mandatory
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UserP.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        // Setter method using 'set' keyword and there should not be any return type not even void or never
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("Course count should be more than 1");
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return UserP;
}());
// Inheritance in class using extends keyword
var SubUser = /** @class */ (function (_super) {
    __extends(SubUser, _super);
    function SubUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    SubUser.prototype.changeCourseCount = function () {
        this._courseCount = 4; // accessing protected variable declare in parent class
    };
    return SubUser;
}(UserP));
var userp = new UserP("h@h.com", "hitesh");
userp.name; // can be accessible as its access modifier is public 

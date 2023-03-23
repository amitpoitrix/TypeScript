"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var C1 = /** @class */ (function () {
    function C1(a, b, x, y) {
        this.a = a;
        this.b = b;
        this.x = x;
        this.y = y;
    }
    C1.prototype.sum = function () {
        console.log(this.a + this.b);
    };
    C1.prototype.sub = function () {
        console.log(this.x - this.y);
    };
    return C1;
}());
var c = new C1(23, 42, 2000, 7000);
c.sum();
c.sub();

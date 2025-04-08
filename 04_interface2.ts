interface I1{
    a: number;
    b: number;
    sum(): void;
}

interface I2 extends I1{
    x: number;
    y: number;
    sub(): void;
}

class C1 implements I2{
    a: number;
    b: number;
    x: number;
    y: number;

    constructor(a: number, b: number, x: number, y: number){
        this.a = a;
        this.b = b;
        this.x = x;
        this.y = y;
    }

    sum(): void{
        console.log(this.a + this.b);
    }

    sub(): void{
        console.log(this.x - this.y);
    }
}

var c = new C1(23, 42, 2000, 7000);
c.sum();
c.sub();

// Temporary solution to ignore error
export{}
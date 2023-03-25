// TypeScript Class

// 1. Class declaration along with defination
class User {
    // we need to declare class property explicitly in .ts which is not required in .js 
    public email: string;   // bydefault access modifier is public or we can explicitly mention using 'public'
    private name: string;    // private variables/methods are not accesible outside current class
    readonly city: string = "Jaipur";   // readonly once assign can't reassign again
    constructor(email: string, name: string){
        this.email = email;
        this.name = name

    }
}

const userData = new User('amit@a.co', 'amit');


// 2. Production level class defination in .ts
class UserP {

    protected _courseCount = 1; // protected variables/ methods are only accessible in current as well as inherited class
    readonly city: string = "Jaipur";

    // Here, by providing access modifier in arguement helps to not to declare variables(class property) separately 
    constructor(
        public email: string, 
        public name: string,
        // private userId: string
    ){}

    // private method: only accessible in current class
    private deleteToken(){
        console.log("Token deleted");
    }

    // Getter method using 'get' keyword and return type is mandatory
    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    // Setter method using 'set' keyword and there should not be any return type not even void or never
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

// Inheritance in class using extends keyword
class SubUser extends UserP {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4;     // accessing protected variable declare in parent class
    }
}

const userp = new UserP("h@h.com","hitesh")
userp.name; // can be accessible as its access modifier is public 
// userp.deleteToken();    // can't access due to private

export {};
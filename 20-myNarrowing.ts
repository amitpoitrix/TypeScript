// TypeScript Narrowing: Narrow down to specific type

// 1. Narrowing down into number and string type
function detectType(val: number | string ){
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}

// 2. Narrowing down into string and null type
function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}

// 3. Narrowing down into string, string[] and null type
function printAll(strs: string | string[] | null) {
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
}

// 4. Using 'in' operator for narrowing
interface User {
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin){
    // use of 'in' operator to check whether particular property is present in interface or not
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}

// 5. Use of 'instanceof' operator to check whether particular value is an instance of any class 
function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());        
    } else {
      console.log(x.toUpperCase());                
    }
}

// 6. Use of 'is' operator in return type and 'as' operator inside function for narrwoing
type Fish = {swim: () => void};
type Bird = {fly: () => void};

// Making function type truthy for Fish using 'is'
function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if (isFish(pet)) {
        pet;    // here we're sure that pet is of type Fish
        return "fish food";
    } else {
        pet;    // here we're sure that pet is of type Bird
        return "bird Food";
    }
}

// 7. Discriminated Union - Narrowing
interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square"
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle;

// Not able to handle here
function getTrueShape(shape: Shape){
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    //return shape.side * shape.side
}

// handles properly here
function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.width

        default:
            const _defaultforshape: never = shape
            return _defaultforshape
    }
}

export {};
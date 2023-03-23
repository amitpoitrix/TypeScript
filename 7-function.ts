function addTwo(num: number): number{
    return num + 2;
   //return "hello"
}

function getUpper(val: string){
   return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean){}

// function with default parameter
let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

let myValue = addTwo(5)
getUpper("amit")

signUpUser("amit", "amit@lco.dev", false)
loginUser("a", "a@a.com")

// function getValue(myVal: number): boolean{
//     if (myVal > 5) {
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s: string):string => {
   return "";
}

const heros = ["thor", "spiderman", "ironman"]
// const heros = [1, 2, 3]

heros.map((hero): string => {
   return `hero is ${hero}`;
});


function consoleError(errmsg: string): void{
   console.log(errmsg);
}

// never is used when a function never ever returns
function handleError(errmsg: string): never{
   throw new Error(errmsg);
}
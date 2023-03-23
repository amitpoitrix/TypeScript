// Union in TypeScript using "|"
let score: number | string = 33
score = 44
score = "55"
console.log("score: ",score);


// 2. Using type
type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let amit: User | Admin = {name: "amit", id: 334};   // here type is User
amit = {username: "akb", id: 334};  // here type is Admin

function getDbId(id: number | string){
    //making some API calls
    console.log(`DB id is: ${id}`);
    
}

// function getDbId(id: number | string){
//     if (typeof id === "string") {
//         id.toLowerCase();
//     }
// }

getDbId(3);
getDbId("3");


// 3. union in array 
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
// const data3: string[] | number[] = [1, 2, 3];   // either all the elements in array is string or number
const data4: (string | number | boolean)[] = ["1", "2", 3, true];


// 4. using union as enum
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew";
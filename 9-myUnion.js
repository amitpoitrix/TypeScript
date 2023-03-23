// Union in TypeScript using "|"
var score = 33;
score = 44;
score = "55";
console.log("score: ", score);
var amit = { name: "amit", id: 334 }; // here type is User
amit = { username: "akb", id: 334 }; // here type is Admin
function getDbId(id) {
    //making some API calls
    console.log("DB id is: ".concat(id));
}
// function getDbId(id: number | string){
//     if (typeof id === "string") {
//         id.toLowerCase();
//     }
// }
getDbId(3);
getDbId("3");
// 3. union in array 
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
// const data3: string[] | number[] = [1, 2, 3];   // either all the elements in array is string or number
var data4 = ["1", "2", 3, true];
// 4. using union as enum
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew";

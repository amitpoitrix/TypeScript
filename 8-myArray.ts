// 1. Declaring array of string/number type
const superHeros: string[] = [];
// const heroPower: number[] = [];
superHeros.push("spiderman");
superHeros.push("batman");
superHeros.push("flash");
console.log("superHeros: ", superHeros);


// 2. Another way to declare array type
const heroPower: Array<number> = [];
heroPower.push(2);
heroPower.push(3);
heroPower.push(1);
heroPower.pop();
console.log("heroPower: ", heroPower);


// 3. Declaring array of User type
type User = {
    name: string
    isActive: boolean
};

const allUsers: User[] = [];
allUsers.push({name: "Aman", isActive: false});
allUsers.push({name: "Amit", isActive: true});
console.log("allUsers: ", allUsers);


// 4. Declaring and initializing 2D array type
const MLModels: number[][] = [
    [255, 255, 255],
    [12, 45],
    [16]
];

console.log("MLModels: ", MLModels);

export{}
// 1. creating object
const User = {
    name: "amit",
    email: "amit@lco.dev",
    isAvtive: true
}


// 2. function with parameter accepting as object
function createUser({name: string, isPaid: boolean}){}

// here this email will throw error
// createUser({name: "amit", isPaid: false, email: "a@a.com"}); 

// but if this object store in variable than it won't - STRANGE
let newUser = {name: "amit", isPaid: false, email: "a@a.com"};
createUser(newUser);


// 3. function with return type as object with exact property mentioned
function createCourse():{name: string, price: number}{
    return {name: "reactjs", price: 399};
}

// Temporary solution to ignore error
export{}
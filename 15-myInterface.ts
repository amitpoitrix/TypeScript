//TypeScript Interface 

interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}

// Reopening of the interface with same name as above but it won't possible in type alias
interface User {
    githubToken: string
}

// Inheritance of interface & it more than one use ',' like extends I1, I2
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const amit: Admin = { dbId: 22, email: "h@h.com", userId: 2211,
role: "admin",
githubToken: "github",
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "amit10", off: 10) => { // while defining this method, arguement name can be anything
    return 10;
}
}
amit.email = "h@hc.com"
// amit.dbId = 33;    // can't reassign readonly value

console.log('amit: ', amit);

export {};
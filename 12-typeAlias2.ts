type User = {
    readonly _id: string;   // once assign we can't modify it later
    name: string;
    email: string;
    isActive: boolean;
    credcardDetails?: number;   // optional property
}

// creating variable with User type
let myUser: User = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false
}

// Assigning values
myUser.email = "h@gmail.com";
// myUser._id = "asa";  // can't reassign readonly property again


type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

// Extending cardDetails along with other 2 types
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export{}
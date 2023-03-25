// TypeScript Enum - let you have predefined values

// We can make use of const before 'enum' keyboard in order to have less .js code
enum SeatChoice {
    AISLE = "aisle",    // Here we can assign value or bydefault it take 0 and further auto increment it
    MIDDLE = 3,
    WINDOW,
    FOURTH
}

const hcSeat = SeatChoice.AISLE;
console.log('hcSeat: ', hcSeat);

const abSeat = SeatChoice.WINDOW;
console.log('abSeat: ', abSeat);

export {};
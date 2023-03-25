"use strict";
// TypeScript Enum - let you have predefined values
Object.defineProperty(exports, "__esModule", { value: true });
// We can make use of const before 'enum' keyboard in order to have less .js code
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 4] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 5] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;
console.log('hcSeat: ', hcSeat);
var abSeat = SeatChoice.WINDOW;
console.log('abSeat: ', abSeat);

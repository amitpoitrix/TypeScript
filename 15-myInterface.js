"use strict";
//TypeScript Interface 
Object.defineProperty(exports, "__esModule", { value: true });
var amit = { dbId: 22, email: "h@h.com", userId: 2211,
    role: "admin",
    githubToken: "github",
    startTrail: function () {
        return "trail started";
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
amit.email = "h@hc.com";
// amit.dbId = 33;    // can't reassign readonly value
console.log('amit: ', amit);

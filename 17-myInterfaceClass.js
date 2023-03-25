"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// while implementing any interface we've to make sure all of its variable/ method declaration are being defined
var Instagram = /** @class */ (function () {
    function Instagram(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    return Instagram;
}());
// a class can implement more than one interface
var Youtube = /** @class */ (function () {
    function Youtube(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    // Defining method which is being declare in Story interface
    Youtube.prototype.createStory = function () {
        console.log("Story was created");
    };
    return Youtube;
}());

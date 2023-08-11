"use strict";
class TakePhoto {
    constructor(cameMode, filter) {
        this.cameMode = cameMode;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calculation
        return 10;
    }
}
class Instagram extends TakePhoto {
    constructor(cameMode, filter, burst) {
        super(cameMode, filter);
        this.cameMode = cameMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Getting Sepia");
    }
}
const amit = new Instagram("portrait", "normal", 4);
amit.getReelTime();

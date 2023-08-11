"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    return val + 2;
}
function provideId(id) {
    if (!id) {
        console.log("please provide id");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
// having the potential of new keyword
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    else {
        pet;
        return "Bird Food";
    }
}
function getTrueShape(shape) {
    switch (shape.kind) {
        case "circle":
            return shape.radius;
        case "square":
            return shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function addT(num) {
    return num + 2; // can return only number
}
function gerUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(2);
gerUpper("hello");
signUpUser("1", "2@dev", true);
loginUser("1", "2@dev");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "hello";
}
var getHello = function (s) {
    return "hello";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}

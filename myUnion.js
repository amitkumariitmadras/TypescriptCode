var score = 10;
score = "10";
var user = { name: "amit", id: 1 };
user = { username: "amit", id: 1 };
function getDBId(id) {
    if (typeof id === "string") {
        return id.toUpperCase();
    }
}
// array
var data = [1, 2, 3];
var data1 = ["1", "2", "3"];
var data2 = ["1", 2, "3", true];
var pi = 3.14;
// pi = 3.145 // not allowed
var seatAllotment;
// seatAllotment = 'creq' // not allowed
seatAllotment = 'aisle'; // allowed

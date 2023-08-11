//not a good choice as having many options and we are using if and else function
// const AISLE = 0
// const MIDDEL = 1
// const WINDOW = 2
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDEL"] = 8] = "MIDDEL";
    SeatChoice[SeatChoice["WINDOW"] = 9] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 10] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;

//not a good choice as having many options and we are using if and else function
// const AISLE = 0
// const MIDDEL = 1
// const WINDOW = 2
// lots of code will be generated in javascript if don't want to generate more code apply const in front of enum
enum SeatChoice {
    AISLE = "aisle",  // as we allowed string now we have to assign others too
    MIDDEL = 8, // default mainatin the order if number is given
    WINDOW,
    FOURTH

}

const hcSeat = SeatChoice.AISLE

export {}
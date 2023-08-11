let score: number | string = 10

score = "10"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

// another exmaple
let user: User | Admin = { name: "amit", id: 1 }

user = { username: "amit", id: 1 }

function getDBId(id: number | string) {
    if(typeof id === "string") {
        return id.toUpperCase()
    }

}

// array

const data: number[] = [1, 2, 3]
const data1: string[] = ["1", "2", "3"]
const data2: (string | number | boolean)[] = ["1", 2, "3", true]

let pi: 3.14 = 3.14
// pi = 3.145 // not allowed

let seatAllotment: 'aisle' | 'window' | 'middle'
// seatAllotment = 'creq' // not allowed

seatAllotment = 'aisle' // allowed


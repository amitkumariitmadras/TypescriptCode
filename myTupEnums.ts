// const user: (string | number)[] = [1, "hc"];
let user: [string, number, boolean]
user = ["amit", 1, true]

let rgb: [number, number, number] = [255, 123, 113]

type User = [number, string]

const newUser: User = [1, "amit@gmail.com"]

newUser[1] = "hc.com"
// newUser.push(false) // value are not allowed



export {};

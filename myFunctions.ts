function addTwo(num: number) {
    return num + 2
}
function addT(num: number): number {
    return num + 2 // can return only number
}

function gerUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {
    
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    
}
addTwo(2)
gerUpper("hello")
signUpUser("1", "2@dev", true)
loginUser("1", "2@dev")

function getValue(myVal: number): boolean | string {
    if (myVal > 5) {
        return true
    }
    return "hello"
}

const getHello = (s: string): string => {
    return "hello"
}

const heros = ["thor", "spiderman", "ironman"]
heros.map((hero): string => {
    return `hero is ${hero}`
})

function consoleError(errmsg: string): void {
    console.log(errmsg)
}

function handleError(errmsg: string): never {
   throw new Error(errmsg)
}


export {}
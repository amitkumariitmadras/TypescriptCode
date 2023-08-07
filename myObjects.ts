// const User = {
//     name: 'John',
//     email: 'amit@gmail.com',
//     isActive: true,
// }

// function createUser({name: string, isPaid: boolean}) {
   
// }

// let newUser = { name: "amit", isPaid: true, email: "h@h.com" };
// createUser(newUser)



// function createCourse(): {name: string, price: number}{
//     return {name: "react", price: 100}
// }

// Type alias
// type User = {
//     name: string;
//     email: string;
//     isActive: boolean,
// }

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: true}
// }

// createUser({name: "", email: "", isActive: true})


type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

let myUser: User = {
    _id: "12",
    name: "amit",
    email: "a@b.com",
    isActive: true
}

// mix and match of type

type cardNumber = {
    cardnumber: string
}
type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}


myUser.name = "a@gmail.com"
// myUser._id = "123"

export {}

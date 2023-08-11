const score: Array<number> = []
const names: Array<string> = []


function identityOne(val: boolean | number): boolean | number {
    return val;
}

function identityTwo(val: any): any{
    return val;
}

function identityThree<Type>(val: Type): Type{
    return val;
}

// identityThree("1")

function identityFour<T>(val: T): T{
    return val;
}


interface Bootel{
    brand: string;
    type: number;
}

identityFour<Bootel>({ brand: "kingfisher", type: 1 })


function getSearchProducts<T>(products: T[]): T{
    // do some database operations
    const myIndex = 3;
    return products[myIndex]
}

const getMoreSearchProducts = <T,>(products: T[]): T => { // can put , as it is not jsx syntax but it's generic syntax
    // do some database operations
    const myIndex = 4;
    return products[myIndex]

}

interface Database{
    connection: string;
    username: string;
    password: string;
}
function anotherFunction<T, U extends Database>(valOne:T,valTwo: U): object{
    return {
 valOne, valTwo   
}
}

anotherFunction(2, {
    connection: "my connection",
    username: "my username",
    password: "my password"
})

interface Quiz{
    name: string;
    type: string;
}

interface Course{
    name: string;
    author: string;
    subject: string;
}

class Sellable<T>{
    public cart: T[] = [];

    addToCart(products: T) {
        this.cart.push(products);
    }
}
// console.log('Hello World')
// console.log('Hello World, Im here')

// class User{
//     public email: string;
//     name: string; // by default public can use # to make it private
//     private readonly city: string = "";
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    protected _courseCount = 1;

    constructor(public email: string, public name: string) { }
    
    private deleteToken() {
    console.log("Deleting token");
}

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get courseCount(): number { 
        return this._courseCount;
    }
// setter does not return anything
    set courseCount(courseNumber){
        if (courseNumber <= 1) {
            throw new Error("Invalid course number");
        }
        this._courseCount = courseNumber
}
    }

class Subuser extends User{
    isFamily: boolean = true;
    changeCourseCount() {
        this._courseCount = 10;
    }
}

const hitesh = new User("h@h.com", "Hitesh");
// hitesh.city;  can't access it as it is a private property

// hitesh.deleteToken(); // can't access it as it is a private method
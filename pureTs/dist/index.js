"use strict";
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
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
    }
    deleteToken() {
        console.log("Deleting token");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // setter does not return anything
    set courseCount(courseNumber) {
        if (courseNumber <= 1) {
            throw new Error("Invalid course number");
        }
        this._courseCount = courseNumber;
    }
}
class Subuser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 10;
    }
}
const hitesh = new User("h@h.com", "Hitesh");
// hitesh.city;  can't access it as it is a private property
// hitesh.deleteToken(); // can't access it as it is a private method

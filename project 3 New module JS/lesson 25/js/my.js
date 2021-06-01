"use strict";

// const str = "dfdfd";

// const user = {}
// const user = new Object();

function User(name = Anonimous, age = 1, status = "guest") {
    this.name = name;
    this.age = age;
    this.status = status;
}

const user = new User("Uasya", 33, "admin");
const user = new User();

console.log(user); //User { name: "Uasya", age: 33, status: "admin" }
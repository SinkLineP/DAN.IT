// "use strict";

// const obj = {
//     age: 33,
//     set name(value) {
//         if (value.length < 2) {
//             this._name = value;
//         } else {
//             console.log("Error, Too short name")
//         }
//     },
//     get name() {
//         return this._name;
//     },
//     "hard skills": ["HTML", "CSS", "JS"],
//     getterHardSkills() {
//         return this["hard skills"];
//     },
//     family: {
//         father: {
//             name: "PapaVasya",
//             getFatherName: function () {
//                 return this.name;
//             }
//         }
//     },
//     method: {
//         getName: function () {
//             return this.name;
//         },
//         getAge() {
//             return this.age;
//         }
//     }
// };
// // console.log(obj.family.father.getFatherName())
// console.log(obj.methods)
// // // const obj2 = new Object({});

// // obj.name = "Roman";
// // console.log(obj.name);

// obj.name = "Uasya";
// // console.log(obj.name);
// // console.log(obj["hard skills"]);

// // console.log(obj.getAge());

// // const obj2 = Object.assign({}, obj)

// const obj2 = {};
// for (const key in obj) {
//     console.log(key);
//     obj2[key] = obj[key];
// }


// obj2.name = "SavsemLite";
// console.log(obj.name);
// console.log(obj2.name);

// obj2.status = "student";
// console.log(obj.status);



// const user = {
//     name: "Lite",
//     "last name": "Yagami",
//     profesion: "dev",
//     sayHi () {
//         console.log("Привет, меня зовут " + this.name + " " + this["last name"]);
//     },
//     changeProperty (propertyName, newValue) {
//         if (user)
//         user.propertyName = newValue;
//     }
// }

// user.sayHi();
// user.changeProperty("name", "L");
// console.log(user.name);



const user = {
    name: "Lite",
    "last name": "Yagami",
    profesion: "dev",
    sayHi () {
        
    }

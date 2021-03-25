const arr = [1, 2, "text", true, undefined, {}, ["a", "b"]]

// arr[9] = "9"
// console.dir(arr);


// arr.forEach((value, index, arr) => {
//     console.log(`Element Num.${index + 1}: ${value} or ${arr[index]}`);
// });


// arr.forEach((el, i, arr) => {
//     // el = i;
//     arr[i] = i;
//     console.log(el);
// })

// console.log(arr);

// arr.push("3", "end"); //сверху положил
// console.log(arr);
// arr.pop();            //сверху убрал
// console.log(arr);
// arr.unshift("start1", "start2"); // снизу положил
// console.log(arr);
// arr.shift();                     // снизу убрал
// console.log(arr);

// console.log(arr.splice(4, 2, "hi")); //.spice(4 - index, 2 - кол-во элемениов, "hi" - на что хотим заменить )
// console.log(arr);

// console.log(arr.concat(arr, "arr3")) // Возвращает увеличенный массив
// console.log(arr)

// console.log(arr.indexOf({}));
// console.log(arr.indexOf("text"));

// console.log(arr.sort());


// function mergeArrays(...param) {
//     param.forEach(callBack)
// }


// function replaceItems(deleteProd, addProd) {
//     if (!storage.find((value, inde, arr) => value === deleteProd)) {
//         console.log("Prod not Found");
//         return;
//     }
//     if (!Array,isArray(addProd)) {
//         console.log("New prod is not array");
//         return;
//     }
//     storage.splice(storage.indexOf(deleteProd), 1 , ...addProd);
// }

// replaceItems("water", ["app", "fruit"]);
// console.log(storage);

// function developerSkillInspector(params) {
//     let arrSkills = [];
//     let skill;
//     do {
//         skill = prompt("Введите ваш навык: ");

//         if (arrSkills.length > 0) {
//             if (skill.length > 1) {
//                 arrSkills.push(skill);
//                 console.log(arrSkills);
//             } else {
//                 if (skill && skill.length > 1) {
//                     arr.push(skill);
//                     console.log(arrSkills);
//                 } else {
//                 };

//             };
//         };
//     } while (skill);
// };

// developerSkillInspector();
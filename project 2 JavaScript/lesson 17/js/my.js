// function summ(a, b) {
//     return a + b;
// }

// console.log(summ(2,3));

// const summ2 = (a, b) => {
//     return a + b;
// }

// console.log(summ2(2,3));

// const user = {
//     name: "Uasya",
//     getName: (obj) => {
//         console.log(obj.name);
//     },
// }

// user.getName(user);

function tripleSumm(a) {
    return function (b) {
        return (c) => a + b + c;
    };
}

// let result = tripleSumm(2)(3)(4);
// console.log(result);

function mess() {
    let message = prompt("Enter your text: ");
    let quality = +prompt("Enter you number: ");

    if (message == "" && quality == "") { 
        let message = "Внимание! Сообщение не указано.";
        let quality = 1;
        return console.log(message + " " + quality);
    };


    if (message != "" && quality != "") {
        for () {
            return message
        } 

        
    }

    return console.log(message + " " + quality);

}

mess()
// let startTime = Date.now();
// let endTime = 0;

// const timer = setTimeout(() => {
//     console.log("write now")
//     endTime = Date.now()
//     console.log(endTime - startTime)
// }, 2000);

// const interval = setInterval(() => {
//     endTime = Date.now()
//     console.log(new Date().getSeconds())
//     if (endTime - startTime > 5000) {
//         clearInterval(interval)
//     }
// }, 1000)

// sessionStorage.setItem("key", "test-text");
// const storageValue = sessionStorage.getItem("key")

// sessionStorage.clear()
// sessionStorage.setItem("key", 333)
// const storageValue = localStorage.getItem("key")
// console.log(storageValue, typeof storageValue)

// console.log(typeof localStorage);
// console.log(localStorage.key(0))
// localStorage.removeItem("key")

// sessionStorage.clear()
// const prices = [100, 200, 400, 1200, 600]
// sessionStorage.setItem("prices", prices);

// const pricesFromStorage = sessionStorage.getItem("prices")
// console.log(pricesFromStorage)

// const user = {
//     name: "Roman",
//     age: 18
// }

// const userJSON = JSON.stringify(user) // превращает наш объект user в json формат
// sessionStorage.setItem("user", userJSON)

// const userFromStorage = sessionStorage.getItem("user");
// console.log(userFromStorage, typeof userFromStorage)

// const userObjectFromStorage = JSON.parse(userFromStorage); // превращает нашу json строку, в объект
// console.log(userObjectFromStorage, typeof userObjectFromStorage)


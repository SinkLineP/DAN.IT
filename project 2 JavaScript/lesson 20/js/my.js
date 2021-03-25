// // console.log(window);
// // console.log(document);

// // const obj = {
// //     prop: "",
// //     method() {},
// // }

// // console.log(document.body);
// // console.log(document.body.tagName);

// const body = document.body;

// // console.log(body.childNodes);

// // console.log(({ 0: "text" }).toUpperCase());

// const li = document.getElementsByClassName("list-item");
// console.log(li);

const goodsStore = document.querySelectorAll(".store li");
console.log(goodsStore);
goodsStore.forEach((el) => {
    console.log(el.textContent);

    let goodsCount = +el.textContent.split(": ")[1];
    if (goodsCount === 0) {
        // goodsCount = "закончилось!!!";
        // el.style.color = "red";
        // el.style.fontWeight = 600;
        el.style.cssText = "color: red; font-weight: 600;"
        el.innerText = el.textContent.replace("0", "закончилось!!!");
    }
});
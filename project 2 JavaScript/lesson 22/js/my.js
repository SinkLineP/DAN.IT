
// const btn = document.getElementById("btn");
// btn.onclick = onClickBtnHandler;

// btn.addEventListener("dblclick", onClickBtnHandler);
// btn.addEventListener("dblclick", () => {
//     onDblClickBtnHandler();
//     alert("done");
// })



// btn.addEventListener("click", onClickBtnHandler);

// let count = 0;

// function onClickBtnHandler(event) {
//     console.log("click");
//     count++;
//     if (count > 4) {
//         btn.removeEventListener("click", onClickBtnHandler)
//     }

//     console.log(event.target+ "  count  " + count)
// }

// function onDblClickBtnHandler() {
//     console.log("dblclick")
// }

// const heading = document.createElement("h1");
// heading.textContent = "Добро пожаловать!";

// const btn = document.createElement("button");
// btn.textContent = "Раскрасить";

// document.body.prepend(heading);
// heading.after(btn);
// btn.addEventListener("click", onBtnClick);

// window.addEventListener("mousemove", onBtnClick)

// function onBtnClick() {
//   const text = heading.textContent;
//   console.log(text);
//   const textArr = text.split("");
//   console.log(textArr);
//  const colorTextArr = textArr.map((el) => {
//     const span = document.createElement("span");
//     span.textContent = el;
//     span.style.color = getRandomColor();
//     return span;
//   });
//   heading.textContent = "";
//   heading.append(...colorTextArr);
// }

// function getRandomColor() {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);

//   return `rgb(${r}, ${g}, ${b})`
// }

// ("Добро пожаловать!");
// console.log("Д".style.color);

// function fnName(firstProp, secondProp, ...shosbTake) {}
// // fnName(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

// const arr = [1, 2, 3, 4, 5, 6];
// // ...arr => ...[1, 2, 3, 4, 5, 6] => 1, 2, 3, 4, 5, 6 => in append()

// const newArr = [...arr, "11", "22"];
// console.log(newArr)


// TASK 1 Проверка на нажатие клавишы

// const h1 = document.createElement("h1")
// h1.textContent = "Нажмите любую клавишу."
// document.body.append(h1);
// window.addEventListener("keydown", keyboardPressHandler)

// function keyboardPressHandler(ev) {
//     h1.textContent = `Нажата клавиша: ${ev.key}`;
//     if (ev.key == 'w') {
//         console.log("Up")
//     }
//     if (ev.key == 'a') {
//         console.log("Left")
//     }
//     if (ev.key == 's') {
//         console.log("Down")
//     }
//     if (ev.key == 'd') {
//         console.log("Right")
//     }
// }

//Task 2

// const input = document.getElementById("input");
// const p = document.createElement("p");
// input.after(p);

// input.addEventListener("focus", inputChangeHandler);

// function inputChangeHandler(evt) {
//     console.log(evt);
//     window.addEventListener("keydown", (evt) => {
//         p.textContent += evt.key
//     });
// }


// const input = document.getElementById("input");



// function enter(el) {

// 	window.addEventListener("keydown", (el) => {
// 		if (typeof +el.key === "number" && !isNaN(+el.key)) {
// 			const p = document.createElement("p");
// 			p.textContent = "Вводить можно только буквы и символы";
// 			input.after(p)
// 			console.log(p)
// 			// input.value = area.value.splice(area.value.length - 1);
// 		} else {
// 			if (p) {
// 				p.remove();
// 			}
// 		}


// 	});
// }

// enter();


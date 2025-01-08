const button = document.querySelector(".button");
const buttonAll = document.querySelectorAll(".button");
const buttonList = document.querySelector(".button-list");
const buttonItemList = document.querySelectorAll(".button-item");

const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const third = document.querySelector(".third");

parent.addEventListener("click", (e) => {
  console.log("Parent click");
});
child.addEventListener("click", (e) => {
  e.stopPropagation(); // блокує вспливання події
  console.log("Child click");
});
third.addEventListener("click", (e) => {
  e.stopImmediatePropagation(); // Блокує обробники події на цьому елемнті
  console.log("Third click");
});

// console.log(buttonList);

buttonList.addEventListener("click", (e) => {
  // e.currentTarget - це елемент на якому висить обробник події(addEventListener)
  // e.target - це елемент на якому відбулася подія
  // nodeName - дозволяє отримати назву тегу
  // e.target.nodeName; - дозволяє отримати назву тегу на якому відбулась подія
  // якщо назва тегу на якому відбулась подія не BUTTON то ми зупиняємо виконання функції(Функція не виконуєься взагалі)
  console.log(e.currentTarget);
  if (e.target.nodeName !== "BUTTON") return;
  console.log(e.target.textContent);
  // console.log("Відпрацювання юлки");
});

// buttonAll.forEach((button) =>
//   button.addEventListener("click", (e) => {
//     console.log("Ти клацнув на кнопку!");
//   })
// );

// buttonItemList.forEach((button) =>
//   button.addEventListener("click", (e) => {
//     console.log("Ти клацнув на лішку!");
//   })
// );

// button.addEventListener("click", (e) => {
//   console.log("Ти клацнув на кнопку!");
// });

const colorPalette = document.querySelector(".color-palette");
const selectedColor = document.querySelector(".selected-color");

colorPalette.addEventListener("click", onClickPalletButton);

function onClickPalletButton(e) {
  if (e.target.nodeName !== "BUTTON") return;
  console.log(e.target.textContent);
  selectedColor.textContent = e.target.dataset.color;
  selectedColor.style.backgroundColor = e.target.dataset.color;
}

function createColorPalette() {
  const buttons = [];
  for (let i = 0; i < 100; i++) {
    const color = getRandomColor();
    const button = document.createElement("button");
    // button.textContent = color;
    button.dataset.color = color;
    button.style.backgroundColor = color;
    button.classList.add("item");
    button.type = "button";
    buttons.push(button);
  }
  colorPalette.append(...buttons);
}

createColorPalette();

console.log(colorPalette);

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, "0");
}

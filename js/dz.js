// Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.

// 1)  Створити розмітку з кнопкою та текстовим полем
// 2)  За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами( 12 , 13 строка(querySelector))
// 3)взяли значення яке записане в текстовому полі(117 строка)(.value)
// 4) ЗАмінили значення div на значення інпута яке отримали у минулому кроці(textContent) перевизначаємо значення за допомогою =

const name = "Artem";

// console.log(name);

const input = document.querySelector("#input");
const div = document.querySelector("#div");

// Подія вводу тексту називається input
input.addEventListener("input", onInput);

function onInput() {
  console.log("Ви написали буковку");
}

// (17 строка)текстове поле.значення

const inputValue = input.value;

div.textContent = inputValue;

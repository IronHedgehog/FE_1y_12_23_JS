// 3)Що таке DOM
// 4)Пошук DOM-вузлів

// 1)Отримали доступ до Html елементу
// querySelector() - метод який дозволяє знайти HTML елемент за селектором будь-якої складності
const ul = document.querySelector(".list");

// querySelectorAll - повертає масив елеметів у яких є селектор який ми шукаємо
const liAll = document.querySelectorAll(".list-item");

const button = document.getElementById("button");

console.log(ul);
console.log(liAll);
console.log(button);

// Document  - це наша HTML  сторінка
console.log(document);

// 5)Властивості

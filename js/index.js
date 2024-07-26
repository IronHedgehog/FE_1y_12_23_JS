// 3)Що таке DOM
// 4)Пошук DOM-вузлів

// 1)Отримали доступ до Html елементу
// querySelector() - метод який дозволяє знайти HTML елемент за селектором будь-якої складності
const ul = document.querySelector(".list");

// querySelectorAll - повертає масив елеметів у яких є селектор який ми шукаємо
const liAll = document.querySelectorAll(".list-item");

const button = document.getElementById("button");

// console.log(ul);
// console.log(liAll);
// console.log(button);

// Document  - це наша HTML  сторінка
console.log(document);

// 5)Властивості

// Методи навігації:

// Знаходимо root element - батьківський елемент
console.log(ul.parentElement);
console.log(ul.parentNode);

// Дитячі елементи:

console.log(ul.childNodes); // цей метод повертає текстові вузли(пробіли у вашій html розмітці спричинені prettierom або усим іншим,що повʼязано з кодстайлінгом)
console.log(ul.children); // Метод який повертає дитячі елементи
console.log(ul.childElementCount); // повертає кількість вкладених елементів

// Беремо перший дитячий елемент
console.log(ul.firstChild); // повертає перший пробіл

console.log(ul.firstElementChild); // повертає перший дитячий елемент
// Знаходимо останній елемент дитячий

console.log(ul.lastChild); //

console.log(ul.lastElementChild); // повертає дитячий дитячий елемент

// console.log(ul.nextSibling);
// console.log(ul.previousSibling);
// Дозволяє знаходити наступних сусідів або попередніх
console.log(ul.nextElementSibling);
console.log(ul.previousElementSibling);

// ВЛАСТИВОСТІ

// value, src,

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcAOQOXpz3-LzbrnJJkZnn5jejcz7HPJyAkw&s
const img = document.querySelector(".img");
// Заміна атрибуту src
img.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcAOQOXpz3-LzbrnJJkZnn5jejcz7HPJyAkw&s";

const link = document.querySelector(".link");
// Замінили посилання
link.href = "https://google.com";
// textContent - дозволяє замінити або додати текстовий контент
link.textContent = "Посилання на гугл";

const input1 = document.querySelector(".value");
const input2 = document.querySelector(".check");

// .value - дозволяє отримати поточне значення інпуту
// console.log(input1.value);
// якщо ви хочете взяти значення чекбоксу ви застосовуєте значення checked
// console.log(input2.checked);

//  ІНЛАЙНОВІ СТИЛІ

// Бере наш список, записує атрибут style, в нього вона записує властивість backgroudColor через дорінює прописуємо значення цього кольору

// якщо ваша властивість складається з 2 або більше слів ви маєте кожне нове слово писати з великої літери окрім першого слова
ul.style.backgroundColor = "green";
ul.style.color = "red";

// console.log(ul.style);

// CLASSLIST
// contains,remove,replace,add,toggle

console.log(ul.classList);

const isOk = ul.classList.contains("list");
console.log(isOk);
//
ul.classList.replace("list", "red");
console.log(ul.classList);

//add дадає
ul.classList.add("Petro");
// remove - забирає
ul.classList.remove("red");

// РОБОТА З РЯДКАМИ

// 1)Перевірка ДЗ
// 2)Закріплення кахутом

// ТИПИ ДАНИХ
// String,number,boolean, null,undefined, bigInt,Symbol

// STRING - строка

const pseudoBoolean = "true"; // будь-який набір символів в лапках це строка.

// 3)Що таке рядок?

// 4)Конкатенація рядків

const hello = "Hello ";
const world = "World";

console.log(hello + world + " asdasdasd"); //додали строку
// додавання строк одна до одної це конкатенація
console.log(+10 + Number(20) + Number("30"));

// 5)Властивості та методи рядків

const string = "qwerty12345@?".length; // length - повертає вам значення кількості символів у рядку

const spam = "sAlE";
console.log(spam.toLowerCase());
console.log(spam.toUpperCase());

if (spam.toUpperCase() === "SALE") {
  console.log("Повідомлення заблоковано");
}

console.log(string);

// 6)Шаблонні рядки та інтерполяція
// Практика(вирішення задачі разом)
// Підсумки

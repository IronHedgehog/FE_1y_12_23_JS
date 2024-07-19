// РОБОТА З РЯДКАМИ

// 1)Перевірка ДЗ
// 2)Закріплення кахутом

// ТИПИ ДАНИХ
// String,number,boolean, null,undefined, bigInt,Symbol

const string1 = "true";

// STRING - строка

const pseudoBoolean = "true"; // будь-який набір символів в лапках це строка.

// 3)Що таке рядок?

// 4)Конкатенація рядків

const hello = "Hello ";
const world = "World";

console.log(hello + world); //додали строку
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

// length - властивість яка вказує нам на довжину рядка

const string2 = "qwertyййййййййййййййййй12345@?".length;

const string3 = "             і ф і в ф і в              ";
// метод trim() -обрізає всі пробіли зліва та справа від речення
console.log(string3.trim().length);
console.log(string3);

if (string2 >= 30) {
  console.log("Занадто велике повідослпення");
}

const string4 = "JavaScript";

// indexOf - метод який повертає вам індекс елемента який ви записали у кргулі дужки
// Якщо елемента не існує то повертає -1
// Він шукає перший збіг і повертає його індекс
// Чутливий до регістру
console.log(string4.indexOf("A"));
console.log(string4.indexOf("a"));

const email = "asdasd.com";

// Метод includes  повертає boolean значення (true,false)
// чутливий до регістру
console.log(email.toUpperCase().includes("a"));

if (email.includes("@")) {
  console.log("З вашим емейлом усе добре");
} else {
  console.log("Введіть правельний емейл (@)");
}
const string5 = "Якесь повідомлення";

// метод startWith - можна перекласти як починається з
//повертає boolean значення (true,false) в дужках ви можете запитати чи є символи які ви вказуєте на початку рядка
// Чутливий до регістру
//
console.log(string5.toUpperCase().startsWith("Я"));
console.log(string5.toUpperCase().startsWith("я"));
// метод endWith - можна перекласти як закінчується з
//повертає boolean значення (true,false) в дужках ви можете запитати чи є символи які ви вказуєте на початку рядка
// Чутливий до регістру
console.log(string5.toUpperCase().endsWith("ННЯ"));
console.log(string5.toUpperCase().endsWith("ФІВ"));

const string6 = "Це шоста строка";

// 177 - перший параметр - це максимальна довжина вашого рядка яка буде досягнута навіть якщо вона більша за ту що є
// "A" - символи які будуть підставлені на початок рядка в тому випадку якщо довжина поточна менша за довжину яку ви вказали у першому параметрі
// Якщо символів менше за максимум який ви вказали в першому параметрі то вам виведеться ваш поточний рядок

console.log(string6.length);
console.log(string6.padStart(177, "A"));
console.log(string6.padEnd(3, "A"));

const value = prompt("Введіть число");

console.log(Number(value));

const hours = value / 60;

const days = Math.floor(hours / 24);
const numberHours = Math.floor(hours % 60);

const modHours = String(numberHours).padStart(2, 0);
const minutes = hours % 60;
const modMinutes = String(minutes).padStart(2, 0);

console.log(days + " " + modHours + " " + modMinutes);

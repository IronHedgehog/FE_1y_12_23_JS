// "use strict";

//Виводить дані на вкладочку "Консоль" у панелі розробника

// змінна - це комірка в памʼяті нашого ПК куди ми записуємо ,будь які, дані які нам потрібні.
// b - змінна в яку ми поклали 10

//КОД ВИ ПИШИТЕ ДЛЯ ЛЮДЕЙ НЕ ДЛЯ КОМПУХТЕРА

// b - назва змінної
//  = - оператор присвоєння
// 10 - дані які ми бажаємо присвоїти у комірку(зміну b)
// b = 10;
// x = b + 2;

// console - Звернення до консолі.
// .log() - Покажи результат в консоль
// x - будь-що що ви бажаєте побачити в консолі
// console.log(x);

// 0101010101010010101001000101001010101010101001010101
// name = "Artem";
// console.log(name);
// ВЛАСТИВІСТЬ - якась описова характеристика
// name.length - через крапку ми з вами звертаємось до властивостей елементу
// name - імʼя .length - довжина імені в символах
// nameLength = name.length;
// console.log(nameLength);

// МЕТОД - дозволяє зробити дію

// методи ми також пишемо через крапку перед назвою методу та з дужками крушлими у кінці

// console.log(name.toUpperCase());

//

// const
// let
// Hoisting - всплиття

// var name = "Artem";
//const - незмінне значееня
const name = "Artem";

let age = 23;
console.log(age);
age = age + 1;
console.log(age);

console.log(name);
// ТИПИ ДАНИХ

//  "String" - строка
const string = "String";
// оператор typeof дозволяє визначити тип даних у змінній.
console.log(typeof string);
const number = 10;
console.log(typeof number);
const bigInt = 9007199254740991n;
console.log(typeof bigInt);
const trueBoolean = true;
const falseBoolean = false;
console.log(typeof trueBoolean);

const symbol = Symbol("qwe");
console.log(typeof symbol);

const ul = null; //null - ми створюємо руками

const undefinedd = undefined; // undefined - нічого не знайдено

alert("ПОВІДОМЛЕННЯ"); // блокує виконання коду та виводить на екран у вигляді вспливаючого вікна повідомлення

const asd = prompt("Як у вас справи?"); // Спосіб отримати відповідь письмову від користувача

console.log(asd);

const isOk = confirm("Чи підтверджуєте ви перехід на іншу сторінку?");

if (isOk === true) {
  window.location.href = "https://www.google.com/";
} else {
  console.log("Ви відмовились");
}

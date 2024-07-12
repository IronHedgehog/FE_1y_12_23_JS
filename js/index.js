// Операції з числами

// + - / * %

const number1 = 10;
const number2 = 20;

console.log(number1 + number2);
console.log(number2 - number1);
console.log(number1 * number2);
console.log(number1 / number2);
console.log(3 % 2); // остача(залишок) від ділення

if (number1 % 2 === 0) {
  console.log("Парне");
} else {
  console.log("Не парне");
}

// ** - оператор піднесення до ступіню
console.log(2 ** 5);

// операції порівняння
//< > === <= >= !==
// операції порівняння завжди повертають тип даних Boolean
console.log(5 < 10);
console.log(15 > 10);
console.log(10 >= 10);
console.log(15 <= 15);

console.log(0 !== 0);
// суворе порівняння (порівнює тип даних)
console.log(0 === false);
// == - не суворе порівняння(не порівнює тип даних)
console.log(0 == false);
console.log(1 == true);
// boolean має два значення вони приводяться до 0 та 1
// Приведенення до числа

const number3 = "30";
const number4 = 40;

console.log(Number(number3) + number4);

const string = "String20";
const num = 20;

console.log(Number(string) + num);

// parseInt
// parseFloat

const stringNum = "20String";
const num1 = 10;
// parseInt може взяти з початку строки ціле число
console.log(parseInt(stringNum) + num1);
const floatString = "20.10String";
// parseFloat отримує числа після крапки с початку рядка
console.log(parseFloat(floatString) + num1);

// Суворе порівння (порівняння їде за типами додатково)
console.log(10 === "10"); // false
// не суворе порівняння(не порівнює типи даних)
console.log(10 == "10"); // true

// Перевірка на число

const num22 = "qwgeyqgweuyiqgwiegqwiue";

console.log(!Number.isNaN(+num22));

const validNumber = 22;

// ! - логічний опертор що означає НЕ
console.log(!Number.isNaN(validNumber));

// Додавання чисел з плаваючою точкою

// * 10 щоб отримати ціле число
// результат виразу / на 10 щоб отримати дробове число
console.log((0.2 * 10 + 0.1 * 10) / 10 === 0.3);

// Обʼєкт Math

// floor - округлює до меншого числа
console.log(Math.floor(0.9));
// ceil - округлення в більшу сторону
console.log(Math.ceil(1.1));
// round - округлює за правилами математики
console.log(Math.round(11.5));
// Math.random() - Рандомить число від 0 до 1 (при додаткових налаштуваннях до будь якого числа яке вам треба)
console.log(Math.floor(Math.random() * 10 + 1));

console.log(Math.max(20, 30, 40, 50, 10, 20, 40, 1000, 2000, 5000));
console.log(Math.min(20, 30, 40, 50, 10, 20, 40, 1000, 2000, 5000));
// pow - приводить число до ступіня
console.log(Math.pow(10, 2));
console.log(10 ** 2);

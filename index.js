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

// Перевірка на число
// Додавання чисел з плаваючою точкою
// Обʼєкт Math

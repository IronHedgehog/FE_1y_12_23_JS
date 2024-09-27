var a;
console.log(a);

// hoisting - Всплиття
//(2, 3) - аргументи
console.log(getSumDeclaration(2, 3));
// console.log(getSumExpression(1, 2));

const getSumExpression = function (a, b) {
  return a + b;
};

// getSumExpression - без hoisting

//getSumDeclaration - є з hoisting
console.log(a);
// (a, b) - параметри функції
function getSumDeclaration(a, b) {
  return a + b;
}

// variable - var - має hoisting від якого сучасним стандартом було вирішено відійти
console.log(a);
// var a;
var a = 10;

// console.log(t);
// console.log(b);

const b = 10;

// hoisting - var , funcDeclaration

// Функія вищого порядку

const numbers = [1, 2, 2, 2, 3, 4, 5, 1, 2, 3, 4];

// callBack - сервісні функції які створені обслуговувати функції вищого порядку
function filterNumbersArr(array) {
  const filterArr = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!filterArr.includes(element)) {
      filterArr.push(element);
    }
  }

  return filterArr;
}

const strings = [
  "A",
  "W",
  "W",
  "W",
  "W",
  "W",
  "E",
  "E",
  "E",
  "E",
  "E",
  "S",
  "O",
  "M",
  "E",
];

function stringsBuilder(array, filterFunc) {
  const filteredArr = filterFunc(array);

  let string = "";
  for (let index = 0; index < filteredArr.length; index++) {
    const element = filteredArr[index];
    string += element;
  }
  return string + "E";
}

// console.log(object);
console.log(stringsBuilder(strings, filterNumbersArr));

// getSumOfUniqValuesArray - функція вищого порядку - бо вона отримує параметром функцію
function getSumOfUniqValuesArray(array, filterFunc) {
  // увесь процес фільтрації масиву він абстрогований
  const filteredArr = filterFunc(array);

  let sum = 0;
  for (let index = 0; index < filteredArr.length; index++) {
    const element = filteredArr[index];
    sum += element;
  }
  return sum;
}

console.log(getSumOfUniqValuesArray(numbers, filterNumbersArr));

// greetings - функціональний вираз
// message - параметр який ми очикуємо на прийом ;
// CallBack - функція зворотнього виклику

const greetings = function (message) {
  console.log(message);
};
//highOrderFunc - функція вищого порядку(отримує параметром функцію)
const highOrderFunc = function (callBack) {
  const str = "We are awesome";
  callBack(str);
};
// highOrderFunc() - виклик функції;
highOrderFunc(greetings);

// АНОНІМНА ФУНКЦІЯ () => {};
() => {
  const a = "a";
  console.log(a);
};

//
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.body.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomColor();
});

() => {
  const a = "a";
  console.log(a);
};

// IIFE (Immediately Invoked Function Expression)  - функція негайного виклику
(() => {
  console.log("2");
})();

const getSum = function (a, b) {
  a + b;
};

console.log(getSum(1, 2));

// у стрілку(=>) - вмонтований ретурн,тому якщо у вас один рядок коду то ви можете сміливо ретурн не записувати. Якщо у вас більше рядків коду то return все так же є обовʼязковим
const getSumArrowFunc = (a, b) => {
  return a + b;
};

console.log(getSumArrowFunc(5, 5));

// Arguments -  локальна зміна яка створюється тільки у декларованих функціях вміщує у себе усі передані аргументи

function calculator() {
  console.log(arguments);
  console.log(arguments);
}

calculator(
  1,
  2,
  34,
  5,
  6,
  7,
  8,
  9,
  567,
  56,
  456,
  35,
  345,
  234,
  234,
  213,
  12,
  31,
  23,
  123,
  12,
  3
);

// const
//параметри які ми очикуєм для роботи
//  =>
//
const arrowFunc = (a, b, c) => a + b + c;
const arrowFunck = () => a + b + c;
const arrowFunckc = (x) => x + b + c;

const expressionFunck = function (a, b, c) {
  // return - повертаю результат роботи в зовнішній код
  return a + b + c;
};

const result = () => 1 + 2;

console.log(result());
//  ...rest - оператор який може зібрать усі параметри функції в один масив
// ...arguments - зібрали усі аргументи функції у один єдиний масив параметрів для того щоб опрацювати нескінченний потік аргументів
const calculatorr = (...arguments) => {
  console.log(arguments);
};

calculatorr(
  1,
  2,
  3,
  4,
  5,
  45,
  6,
  456,
  45,
  63,
  44,
  234,
  12,
  31,
  23,
  1,
  34,
  5346,
  457,
  6,
  75,
  8,
  57,
  6
);

// 1)Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:

// Порахувати суму всіх елементів масиву.
// Знайти мінімальний елемент масиву.
// Знайти максимальний елемент масиву.
// Перепишіть колбек-функції на стрілки

// Функція вищого порядку
const processArray = (array, callback) => {
  return callback(array);
};

// callback
// arrowFunc  - Короткий синтаксис
// Не явний return
// const getSum = function (arr) {
//   return arr.reduce((acc, curr) => acc + curr);
// };
//  => = return
// function declaration
// function declaration - мають hoisting (доступні всюди в області бачення)
function name(a, b) {
  return a + b;
}

// function expression
const func = function (a, b, c) {
  return a + b + c;
};
// arrow func
const funcArr = (a, b, c) => a + b + c;

const getSum = (arr) => arr.reduce((acc, curr) => acc + curr); // Відбувається додавання значень масиву

// callback
const getMin = function (arr) {
  return Math.min(...arr);
};
// callback
const getMax = function (arr) {
  return Math.max(...arr);
};
// Щоб викликати функцію нам необхідно її імʼя
// () - відпрацюй, будь ласка.
// в круглі дужечк у нас є можливість записати через кому дані які ми бажаєм відпрацювати
console.log(processArray([7, 3, 9, 1, 0, 123, 7, -50], getSum));
console.log(processArray([7, 3, 9, 1, 0, 123, 7, -50], getMin));
console.log(processArray([7, 3, 9, 1, 0, 123, 7, -50], getMax));

// 2. Створіть функцію operate(a, b, callback), яка приймає два числа та колбек для виконання операції над ними. Використайте її для виконання наступних операцій:

// Додавання.
// Віднімання.
// Множення.
// Ділення.
// Перепишіть колбеки на стрілкові функції

const operate = (a, b, callback) => {};

// Виклик функції з різними операціями
console.log(
  operate(10, 5, function (a, b) {
    return a - b;
  })
); // Віднімання
console.log(
  operate(10, 5, function (a, b) {
    return a + b;
  })
); // Додавання
console.log(
  operate(10, 5, function (a, b) {
    return a * b;
  })
); // Множення
console.log(
  operate(10, 5, function (a, b) {
    return a / b;
  })
); // Ділення

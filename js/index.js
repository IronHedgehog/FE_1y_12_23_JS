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

// getSumOfUniqValuesArray - функція вищого порядку - бо вона отримує параметром функцію
function getSumOfUniqValuesArray(array, filterFunc) {
  const filteredArr = filterFunc(array);

  let sum = 0;
  for (let index = 0; index < filteredArr.length; index++) {
    const element = filteredArr[index];
    sum += element;
  }
  return sum;
}

console.log(getSumOfUniqValuesArray(numbers, filterNumbersArr));

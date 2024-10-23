const arr1 = [1, 23];

const min = Math.min(...arr1);
console.log(min);

const a = {
  a: 5,
  y: 10,
};

const b = {
  a: 1,
  c: 2,
};

const c = {
  ...b, // {a: 1, c:2}
  ...a, // {a:5 , c:2 , y:10}
};

console.log(c);

const arr2 = [10, 2, "asd", 3, 4, "Привіт"];
// Impera
function takeNumbers(array) {
  const numbersFromArray = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // typeof - визначає тип даних
    console.log(typeof element);
    if (typeof element === "number") {
      numbersFromArray.push(element);
    }
  }

  return numbersFromArray;
}

console.log(takeNumbers(arr2));

//Declaration code

function takeNumbersDeclaration(arr) {
  return arr
    .filter((value) => typeof value === "number")
    .filter((value) => value < 3);
}

console.log(takeNumbersDeclaration(arr2));

const arr3 = [1, 23, 4, 5, 6, 78];

function multiply(array) {
  const miltiplyArr = [];

  for (let index = 0; index < array.length; index++) {
    miltiplyArr.push((array[index] *= array[index]));
  }
  return miltiplyArr;
}
// multiply(arr3);
console.log(arr3);

function multiplyDeclaration(array) {
  return array.map((value) => (value *= value));
}

console.log(multiplyDeclaration(arr3));
console.log(arr3);

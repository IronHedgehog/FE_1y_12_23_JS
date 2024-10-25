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
  const arrCopy = [...array];
  const miltiplyArr = [];

  for (let index = 0; index < arrCopy.length; index++) {
    miltiplyArr.push((arrCopy[index] *= arrCopy[index]));
  }
  return miltiplyArr;
}
console.log(multiply(arr3));
console.log(arr3);

function multiplyDeclaration(array) {
  return array.map((number, index, array) => {
    console.log(array);
    return (number *= number);
  });
}

console.log(multiplyDeclaration(arr3));
console.log(arr3);

// forEach === for

console.log(arr3.forEach((value) => (value *= value)));

console.log(arr3.map((value) => (value *= value)));

const users = [
  { name: "Artme", age: 30, isActive: true },
  { name: "asd", age: 25, isActive: false },
  { name: "qwe", age: 20, isActive: true },
  { name: "zxc", age: 15, isActive: false },
  { name: "dfg", age: 10, isActive: true },
];

// Кожен метод масиву окрім forEach повертає масив
console.log(
  users.filter((user) => user.isActive).map((activeUser) => activeUser.name)
);

console.log(users.find((user) => user.age === 10));
// { name: "Artme", age: 30, isActive: true } - true
// { name: "asd", age: 25, isActive: false } - false
console.log(users.every((user) => user.age >= 30));
// { name: "Artme", age: 30, isActive: true } - true
console.log(users.some((user) => user.age >= 30));

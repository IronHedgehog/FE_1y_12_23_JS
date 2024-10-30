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

// map - повертає масив тієж довжини як масив який перебираєте

const arr4 = [1, 23, 45, 6, 8, 8];

const mapp = arr4.map((number) => {
  return number;
});

console.log(mapp);

// filter жодного елементу не знайдено

const filterArr = arr4.filter((number) => number > 50);

console.log(filterArr);

const userss = [
  {
    id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    skills: ["ipsum", "lorem"],
    gender: "male",
    age: 37,
  },
  {
    id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
    gender: "female",
    age: 34,
  },
  {
    id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    skills: ["nulla", "anim", "proident", "ipsum", "elit"],
    gender: "male",
    age: 24,
  },
  {
    id: "249b6175-5c30-44c6-b154-f120923736f5",
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    skills: ["adipisicing", "irure", "velit"],
    gender: "female",
    age: 21,
  },
  {
    id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    skills: ["ex", "culpa", "nostrud"],
    gender: "male",
    age: 27,
  },
  {
    id: "150b00fb-dd82-427d-9faf-2879ea87c695",
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    skills: ["non", "amet", "ipsum"],
    gender: "male",
    age: 38,
  },
  {
    id: "e1bf46ab-7168-491e-925e-f01e21394812",
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    skills: ["lorem", "veniam", "culpa"],
    gender: "female",
    age: 39,
  },
];

const getUserNames = (users) => {
  // const userNames = users.map((user) => {
  //   return user.name;
  // });
  // return userNames;

  return users.map((user) => user.name);
};

console.log(getUserNames(userss));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

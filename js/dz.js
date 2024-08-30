let counter = 0;

while (counter <= 20) {
  counter++;
  if (counter % 3 === 0) {
    continue;
  }
  console.log(counter);
}

const arr = [1, 2, 3, 4, 5];
// отримуємо доступ до елементів масиву
console.log(arr[3]);
//Замінити елемент масиву
arr[1] = 15;
// Додати елемент до масиву
arr[5] = 6;
arr[6] = 7;
// arr[100] = 8;

// для того,щоб маніпулювати довжиною масиву, застосовуємо властивість length

// arr - масив з яким працюємо
// .length - властивість яка повертає поточну довжину масиву
//  можемо через дорівнює збільшувати довжину, що призведе до купи undefined  у масиві
// Можемо через = зменшити довжину,що приведе до урізання масиву до довжини яку ви вказали
arr.length = 100;

arr.length = 3;

console.log(arr);

// Ітерація по масиву(перебір масиву з якоюсь ціллю)

const users = ["Artem", "Petro", "Shreder"];

for (let i = 0; i < users.length; i++) {
  const element = users[i];
  console.log(element);
}

const numbers = [];

for (let i = 0; i <= 100; i++) {
  // Це спосіб заповнення масиву за допомогою індексів
  // numbers[i] = i;
  // Спосіб заповнення масиву за допомогою методу масиву (push)
  // push - додає нескінченну кількість елементів у кінеціь масиву
  numbers.push(i);
}

// console.log(numbers);

// Справа від of ви маєте записати назву масиву який ви перебираєте
// Зліва від of ви маєте записати змінну в яку буде потрапляти кожен елемент вашого масиву по черзі
for (let number of numbers) {
  number *= number;
  console.log(number);
}

const string = "helloWorld";

for (const character of string) {
  console.log(character);
}

// console.log(numbers);

const numbers2 = [1, 2, 3, 4, 10, 11, 22, 33, 4, 555, 22, 55, 5, 5];

for (const number of numbers2) {
  if (number < 15) {
    continue;
  }
  console.log(number);
}

const winner = "Anatoliy";

for (const user of users) {
  if (user === winner) {
    console.log("Є переможець");
    break;
  }
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0][0]);

let total = 0;

for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i]);
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
    total += matrix[i][j];
  }
}

console.log(total);

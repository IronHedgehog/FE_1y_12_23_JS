const arrayStr = ["Hello", "world!", "!"];

// join() - збирає з масиву строку
// Приймає параметром роздільник (знак який буде стояти між словами)
const testString = arrayStr.join(" ");

console.log(testString);
// split() - збирає  з строки  масив

console.log(testString.split());

const users = ["Artem", "Petro", "Tema"];

console.log(users.includes("Artem"));

// includes
for (let i = 0; i < users.length; i++) {
  const element = users[i];
  if (element.toLowerCase().trim() === "artem".toLowerCase().trim()) {
    console.log(true);
  }
}

//indexOf
// Повертає індекс елементу який ви шукаєте або повертає -1 якщо елементу який ви шукаєте в масиві не існує

//індекс елемента вам може бути необхідний для видалення з масиву або для оновлення або для копіювання
console.log(users.indexOf("Petro"));

// indexOf
for (let i = 0; i < users.length; i++) {
  const element = users[i];
  if (element.toLowerCase().trim() === "Artem".toLowerCase().trim()) {
    console.log(i);
    break;
  } else {
    console.log("-1");
  }
}

const findElem = "Petro";

console.log(users.includes(findElem));
// push - повертає число(кількість елементів масиву включаючи доданий)
// push - додає будь-яку кількість елементів в кінець масиву
console.log(users.push("Anton", "Tema2")); // довжина масиву

console.log(users);

users.push("Додаю");
console.log(users);
// pop - повертає нам елемент який він видалив
// pop - видаляє ОДИН елемент з кінця масиву
console.log(users.pop());

console.log(users);
// shift() - повна аналогія метода POP() крім того,що він працює з початком масиву
// shift() - видаляє ОДИН елемент з початку масиву
console.log(users.shift());

console.log(users);
// unshift - повертає число(кількість елементів масиву включаючи доданий)
// unshift - додає будь-яку кількість елементів в початок масиву
console.log(users.unshift("Artem"));

console.log(users);

// slice()
// slice() - чудово робить копії масивів
// slice - приймає два параметри (індекс звідки почати копіювати та індекс де закінчити копіювати)
// якщо не ввести жодного параметру ви скопіюєте собі весь масив за замовчуванням
const users1 = users.slice();

const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  numbers[i] += numbers[i];
}

console.log(numbers);

// Метод splice повертає усі вирізані елементи у вигляді масиву
// Перед тим як користуватись треба зробити копію
console.log(users1);
// 1 - індекс елементу з якого почати видалення
//  3 -  кількість елементів яку треба видалити

const findEl = "Artem";

const index = users1.indexOf(findEl);

console.log(users1.splice(index, 1));

console.log(users1);

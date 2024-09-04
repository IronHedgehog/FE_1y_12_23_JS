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

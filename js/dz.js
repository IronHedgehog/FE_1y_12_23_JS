// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

const logItems = function (array) {
  // твій код
  for (let index = 0; index < array.length; index++) {
    // буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].

    console.log(`[${index + 1}-${array[index]}]`);
  }
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

//

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// проходити перевірку на довжину від 4 до 16-ти символів включно

// властивість яка повертає довжину рядка - length
// Створити розгалудження (if else)
// Логічний оператор І
// умова для нашого розгалудження довжину від 4 до 16-ти символів включно
// Повернути в зовнішній код якщо умова справджується true якщо ні то false
const isLoginValid = function (login) {
  // if (login.length >= 4 && login.length <= 16) {
  //   return true;
  // } else {
  //   return false;
  // }
  // && - повертає true або false
  return login.length >= 4 && login.length <= 16;
};
// бути унікальним, тобто бути відсутнім в масиві logins

//allLogins - масив всіх логінів які вже є
//login - логін який ввів користувач який хоче зареєструватись
//якщо  login  присутній у масиві allLogins ми маємо повернути false
//якщо  login  відсутній у масиві allLogins ми маємо повернути true

const isLoginUnique = function (allLogins, login) {
  // includes - повертає true або false залежно від того чи є елемент у масиві
  // if (allLogins.includes(login)) {
  //   return false;
  // } else {
  //   return true;
  // }
  // ! - логічний оператор НЕ (який обертає все навпаки)
  return !allLogins.includes(login);
};
// якщо всі перевірки проїдені має ваш логін додати у масив користувачів
const addLogin = function (allLogins, login) {
  // Так виглядає виклик функції isLoginValid();
  // Метод від оберененого (якщо наша функція повертає результат який нас не влаштовує ми завершуємо виконання функції (Guard close))
  if (!isLoginValid(login)) {
    // return - завершує виконання функції
    return "Логін має бути від 4 до 16 буков";
  }

  if (!isLoginUnique(allLogins, login)) {
    return "Такий логін вже є";
  }

  allLogins.push(login);
  return "Ти гідний реєстрації";
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(addLogin(logins, "Ajax")); // 'Логін успішно доданий!'
console.log(addLogin(logins, "robotGoogles")); // 'Такий логін вже використовується!'
console.log(addLogin(logins, "Zod")); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Помилка! Логін повинен бути від 4 до 16 символів'

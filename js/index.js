// console.log("" == false);
// console.log(0 == false);
// console.log(false == false);
// console.log(NaN == false);
// console.log(null == false);
// console.log(undefined == false);

// if (" ") {
//   console.log("РОБЕ");
// }
// && - Якщо бачить фолс повертає вам фолс значення (значення на якому застопорився)
console.log(1 && 0 && 10 && 1);

// "" - false

// "" && "Artem" - false

// false || 0 - false
console.log(("" && "Artem") || 0 || 10 || false);

console.log("" && "Artem");
console.log(false || 0);

const logIn = true;
// якщо
if (logIn === true) {
  console.log(" ПРивіт, користувач, ти залогінений");
}

// const password = prompt("Введіть ваш пароль");
// password.length - Кількість символів у змінній password

// якщо ... інакше
// if (password.length < 6) {
//   alert("Ваш пароль не надійний");
// } else {
//   alert("Ви геній записів паролю");
// }

const userAge = 70;

if (userAge <= 16) {
  alert("Ви навчаєтесь у школі");
} else if (userAge <= 27) {
  alert("Ви студент");
} else if (userAge <= 40) {
  alert("Ви працюєте");
} else if (userAge <= 60) {
  alert("Вам дають пенсію");
} else {
  alert("Ви легенда");
}

const age = 17;

const isAdult = age >= 18 ? "Так, людині є 18 років" : "Людині намає 18 років";

// if (age >= 18) {
//   console.log("Так, людині є 18 років");
// } else {
//   console.log("Людині намає 18 років");
// }

console.log(isAdult);

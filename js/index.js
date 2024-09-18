console.log(getSum(1, 2));
console.log(ab(1, 3));
// function - ключове слово яке повідомляє всьому що читає цей код,що ви ствоюєте функцію
// getSum - назва вашої функції за якою в майбутньому ви будете її викликати
// () - параметри функції це те що ми записуєм у круглі дужки коли створюємо нашу функцію(a,b - параметри яка наша функція має отримати ззовні -  це можуть бути текстові інпути, це будуть параметри які передаються при виклиці функції)
// {} - тіло функції
//   console.log(5 + 5); - завдання нашої функції

// function declaration - створення функції через ключове слово function
// hoisting - всплиття - це означає, що функцію яку ви створили через ключове слово function(function declaration) ви можете викликати та використати її будь де у коді
// console.log(a);
// const a = 5;
// значення за замовчуванням потрібні щоб захиститись від не передачі параметрів
// Щоб додати дані значення вам достатньо після назви параметру записати = та після нього дати значення яке вам необхідно
function getSum(a = 0, b = 0) {
  // Все що ви створили або написали у {} - залишається у цих фігурних дужках
  // return - дозволяє повернути результат вашої функції у зовнішній код (за межі фігурних дужок)
  const sum = a + b;

  return sum;
  //повернути у зовнішній код (за межі фігурних дужок) результат дії a + b
}
//undefined можна отримати в тому випадку якщо з вашої функції у зовнішній код нічого не повертається
console.log(getSum(1, 2));

// function expression - function declaration яку записали у константу для того щоб функція більше не вспливала

const funcGetSum = function (a, b) {
  return a + b;
};

console.log(funcGetSum(1, 5)); // getSum - імʼя нашої функції яку ми хочемо використати;
// для того щоб запустити функцію(дію) ми маємо після імені функції записати круглі дужечки()
//(3, 4) - при виклиці в круглих дужках ми можемо з вами записати аргументи для запуску функції
console.log(2);
console.log(getSum(3, 4));
console.log(getSum());
console.log(1);
console.log(funcGetSum(1, 2));

function calculator(a, b) {
  const parsedArguments = Array.from(arguments);
  let sum = 0;

  for (let index = 0; index < parsedArguments.length; index++) {
    const element = parsedArguments[index];
    sum += element;
  }
  return sum;
}

console.log(calculator(1000, 2, 3, 1, 4, 22));

// параметри функції = ()
// це дані з зовнішнього коду необхідні для роботи функції
//hoisting - подія всплиття коду

// getMicrovawePowerPlusTime();

// func declaration  - має hoisting(всплиття)
function ab(a, b) {
  return a + b;
}

const getMicrovawePowerPlusTime = function (power, time) {
  return Number(power) + +time;
  //return - оператор повернення який повертає результат функції у зовнішній код якщо його немає завжди буде повертатись undefined
  // return;
};

console.log(getMicrovawePowerPlusTime(800, 60000));

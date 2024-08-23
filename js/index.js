//for, while,do while

// Цикл -  це виконання однієї і тієїж операції стільки разів скільки вам треба
// index++ - +1 до зміної індекс; index += 1; index = index + 1

//for - цикл який виконується за певної умови

// let index = 1 - лічильник - точка відліку
//  index < 1000000; - умова завершення циклу, якщо ця умова перестає виконуватись то ми зупиняємо цикл
// index = index + 1 - кожного разу коли ми виконуємо тіло циклу ми до лічильника додаємо 1

// У for завжди має бути 3 інструкції всередині круглих дужок(якщо ці інструкції пусті це також рахується)
//for (;;)  - нескінченний for

// таблиця множення на 10

// for - утворює цикл
// let i = 10 - створення лічильника
// i <= 100  -  умова виходу(Чи виконується ця умова)
//{
// ...якийсь код
// } - виконується тіло циклу (той код,що ви написали у фігурних дужках)
//i = i + 10 - додавання до лічильника(ітерація)
// Ці 4 операції будуть виконуватись по колу поки цикл не завершиться
for (let i = 10; i <= 100; i = i + 10) {
  // console.log(i);
}

// while - використовується для того,щоб викликати нескінченні цикли

// while - створення циклу while (цикл який відпрацьовує за умови,що запсана в круглих дужках)

let password = false;

const okPassword = "qwerty";

let counter = 10;

// while (схожий на if) - буде виконуватись нескінченно поки умова в дужках не буде дорівнювати false

// break - оператор який дозволяє спинити виконання циклів

// while (!password) {
//   const inputPassword = prompt("Введи вірний пароль");
//   if (inputPassword === okPassword) {
//     password = true;
//   }
//   counter++;
//   if (counter === 3) {
//     alert("Ваш акаунт тимчасово заблоковано");
//     break;
//   }
// }

while (counter > 0 && counter <= 10) {
  console.log(counter);
  counter--;
}

const winnerNumbers = [1, 27, 31, 44, 57, 62, 73, 80, 95, 10];

const petro = [1, 27, 31, 4, 5];

console.log(petro);
console.log(winnerNumbers);

for (let i = 0; i < winnerNumbers.length; i++) {
  for (let j = 0; j < petro.length; j++) {
    if (winnerNumbers[i] === petro[j]) {
      counter++;
      if (counter >= 3) {
        // alert("Ви перемогли");
      }
    }
  }
}

const array = ["Яблуко", "Апельсин", "Груша"];
let index = array.length - 1;

// do while - завжди виконується хоча б раз
do {
  console.log(array[index]);
  index--;
} while (index >= 3);

for (let i = 1; i < 1000; i++) {
  if (i === 5) {
    console.log("Ви вийграли супер приз");
    break;
  }
}

for (let i = 0; i < 1000; i++) {
  if (i === 23) {
    // continue - продовжити(скіпнути/пропустити)
    continue;
  }
  console.log(i);
}

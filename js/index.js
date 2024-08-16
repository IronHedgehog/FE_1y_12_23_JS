//глобальна область бачення(Робить ваш код і ваші змінні доступними всюди)
const a = 5;

// js - { } - блок, обʼєкт
//

{
  const b = 10;
  console.log(b);
  {
    const c = 20;
    console.log(c);
    console.log(b);
    console.log(c + b);
    {
      const d = 40;
      console.log(a);
    }
  }
  // console.log(c + b);
}

// 1)Ключове слово switch
// 2)Key -

// if (key === value) {
// }

const GOLD = "gold";
const SILVER = "silver";
const VIP = "vip";

const subscribe = VIP;

switch (subscribe) {
  // case - завдання
  case "vip":
    console.log("Ваша підписка vip");
    break;
  // зупинка, перерва
  case "gold":
    console.log("Ваша підписка gold");
    break;
  // зупинка, перерва
  case "silver":
    console.log("Ваша підписка silver");
    break;
  // зупинка, перерва

  // default - за замовчуванням(Виконується в тому випадку коли немає підходящого кейсу)
  default:
    console.log(
      "Жодне з завдань не підійшло які я вмію виконувати. Я виконав операцію за замовчуванням"
    );
    break;
}

// Все що ми записуєм на SWITCH .... CASE ми можемо переписати на IF .... ELSE але не навпаки

// IF .... ELSE - універсальний блок для виконання будь-яких розгалуджень

// SWITCH .... CASE - Спеціалізується на певних випадках

const day = "Пʼятниця";

// switch (day) {
//   case "Понеділок":
//     console.log("Сьогодні Понеділок");
//     break;
//   case "Вівторок":
//     console.log("Сьогодні Вівторок");
//     break;
//   case "Середа":
//     console.log("Сьогодні Середа");
//     break;
//   case "Четвер":
//     console.log("Сьогодні Четвер");
//     break;
//   case "Пʼятниця":
//     console.log("Сьогодні Пʼятниця");
//     break;
//   case "Субота":
//     console.log("Сьогодні Субота");
//     break;
//   case "Неділя":
//     console.log("Сьогодні Неділя");
//     break;

//   default:
//     console.log("Невідомий день тижня");
//     break;
// }

// return - Повернути (Повертає результат роботи)
// switch (day) {
//   case "Понеділок":
//     return "Сьогодні понеділок";
//   case "Вівторок":
//     return "Вівторок";
//   case "Середа":
//     return "Середа";
//   case "Четвер":
//     return "Четвер";
//   case "Пʼятниця":
//     return "Пʼятниця";
//   case "Субота":
//     return "CУбота";
//   case "Неділя":
//     return "Неділя";

//   default:
//     return "Такого дня не існує";
// }

// Групування випадків

let fruit = "банан";
let category;

switch (fruit) {
  // Групування елементів
  case "яблуко":
  case "груша":
  case "манго":
  case "банан":
    category = "фрукт";
    break;

  case "морква":
  case "Картопля":
  case "перець":
    category = "Овочі";
    break;

  default:
    category = "Невідома категорія";
    break;
}

console.log(category);

// const - вираз який не змінюється
const t = 10;
// let - вираз який можемо перезаписувати будь де
let value = 0;

// змінні у глобальній області значення вразливі
{
  value += 1;
  value = value + 1;
  // t += 10;
}

console.log(value);

console.log(t + 10);

// Блок - {}
// { } - все що написано у фігурних дужках залишається у цих фігурних дужках
if (true) {
  const m = 20;
} else {
}

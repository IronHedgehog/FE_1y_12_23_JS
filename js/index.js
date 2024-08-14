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
  console.log(c + b);
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

  // default - за замовчуванням
  default:
    console.log(
      "Жодне з завдань не підійшло які я вмію виконувати. Я виконав операцію за замовчуванням"
    );
    break;
}

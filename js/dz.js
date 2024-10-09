// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Використайте cofirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися сумму. Методи повинні спрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.

// 1) Створіть об'єкт "bankAccount"
//  2) У ньому створити властивості "ownerName", "accountNumber", "balance".
// 3) Додати метод  "deposit", - метод - це якась дія
// 4)"withdraw"
// 5) clg
//  6)

const bankAccount = {
  // ключ -string : значення - будь-яким типом даних
  ownerName: "Artem",
  accountNumber: "0123456789",
  balance: "10000000$",

  deposit: function (money) {
    // this В ОБ'ЄКТАХ є самим обʼєктом в якому ви його використовуєте
    // this - контекстом
    // this  в обʼєктах використовувати замість назви обʼєкта в нашому випадку "bankAccount"
    this.balance =
      Number.parseFloat(this.balance) + Number.parseFloat(money) + "$";
    console.log(`Your balance ${this.balance}`);
  },
  withdraw: function (money) {
    // this В ОБ'ЄКТАХ є самим обʼєктом в якому ви його використовуєте
    this.balance =
      Number.parseFloat(this.balance) - Number.parseFloat(money) + "$";
    console.log(`Your balance ${this.balance}`);
  },

  // В методах назвою функції буде ключ
};
// .
// ["deposit"]
bankAccount.deposit("1000$");
// console.log(bankAccount["balance"]);
bankAccount.withdraw("10000$");
// console.log(bankAccount.balance);

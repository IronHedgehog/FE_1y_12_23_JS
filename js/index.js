const bankAccount = {
  // ключ -string : значення - будь-яким типом даних
  ownerName: "Artem",
  accountNumber: "0123456789",
  balance: "10000000$",
  tax: "1$",

  deposit: function (money) {
    // this В ОБ'ЄКТАХ є самим обʼєктом в якому ви його використовуєте
    // this - контекстом
    // this  в обʼєктах використовувати замість назви обʼєкта в нашому випадку "bankAccount"
    this.balance =
      Number.parseFloat(this.balance) +
      Number.parseFloat(money) -
      Number.parseFloat(this.tax) +
      "$";
    console.log(`Your balance ${this.balance} - tax ${this.tax}`);
  },
  withdraw: function (money) {
    // this В ОБ'ЄКТАХ є самим обʼєктом в якому ви його використовуєте
    this.balance =
      Number.parseFloat(this.balance) - Number.parseFloat(money) + "$";
    console.log(`Your balance ${this.balance}`);
  },

  // В методах назвою функції буде ключ
};

// для перебору обʼєкту на разі будемо використоввати цикли

// for (let index = 0; index < bankAccount.length; index++) {
//   console.log(index);
// }

// for (const element of bankAccount) {
//   console.log(element);
// }

for (const key in bankAccount) {
  // console.log(typeof key);
  // console.log(bankAccount[key]);
}

const objectKeys = Object.keys(bankAccount);
// console.log(objectKeys);

const objectValues = Object.values(bankAccount);
// console.log(objectValues);

const objectEntries = Object.entries(bankAccount);
// console.log(objectEntries);

const arr = [1, 2, 3, 4, 5, 55, 6, 7, 8, 9];

function asd(params) {}

console.log(Math.max(...arr)); // 1, 2, 3, 4, 5, 55, 6, 7, 8, 9
console.log(Math.min(...arr)); // NAN

const arr1 = [...arr];
const num1 = 5;
const num2 = 5;
// ПРимітивні типи порівнюються за значенням
console.log(num1 === num2); // true

// масиви відносяться до складного типу даних
// складні типи даних копіюються за посиланням
// При порівнянні складних типів даних порівнюються адреси

console.log(arr === arr1); // false

//  deposit: function(money) {
//         this.balance = Number(this.balance) + Number(money);
//         console.log('Your balance: $' + this.balance);
//     },

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const arr4 = arr3;

console.log(arr4);
// Зелена 1 === Зелена 1
console.log(arr3 === arr4);

const obj1 = {
  a: 5,
  c: 1,
};

const obj2 = {
  a: 1,
  b: 10,
};

const obj3 = {
  ...obj2,
  ...obj1,
};

// obj3{a:1 , b:10} -  ...obj2
// obj3{a:5,b:10,c:1} -  ...obj1,
// При копіюванні якщо властивості повторюються вони перезаписуються

console.log(obj3);

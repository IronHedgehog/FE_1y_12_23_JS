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
console.log(objectKeys);

const objectValues = Object.values(bankAccount);
console.log(objectValues);

const objectEntries = Object.entries(bankAccount);
console.log(objectEntries);

const cards = [
  "Карточка-1", //0
  "Карточка-2", //1
  "Карточка-3", //2
  "Карточка-4",
  "Карточка-5",
];

//2 -індекс елемента який ми шукаємо
// 1 - скільки елементів починаючи з цього індексу ми маємо видалити

console.log(cards.splice(2, 1));

console.log(cards);
// оновлення
cards.splice(0, 1, "Артем");

console.log(cards);

// Створити розмітку з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введені дані правильно заповнені, якщо так, то перенаправляти на іншу сторінку, якщо ні — виводити повідомлення про помилку. Правильно заповнені дані: ім'я містить не менше 3 символів, email містить символ @ та крапку після неї, пароль містить не менше 6 символів.

const button = document.getElementById("button");
const email = document.getElementById("input2");
const password = document.getElementById("input1");
const name = document.getElementById("input3");
const form = document.getElementById("form");
//submit - подія відправки форми
form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  // Запобігання діям за замовчуванням
  e.preventDefault();
}

button.addEventListener("click", onClick);

function onClick(params) {
  // для того щоб отримати значення з текстового поля ми маємо використати властивість value
  // ОТримання значення з поля email

  const input1Value = email.value;

  // ОТримання значення з поля name
  const input2Value = name.value;

  // ОТримання значення з поля password
  const input3Value = password.value;

  if (input2Value.length >= 3) {
    console.log("з імʼям все добре");
  }

  if (input3Value.length > 6) {
    console.log("з паролем все добре");
  }

  if (input1Value.includes("@")) {
    console.log("з емейлом все добре");
  }
}

//При натисканні на кнопку -
//перевіряти
// введені дані правильно заповнені,

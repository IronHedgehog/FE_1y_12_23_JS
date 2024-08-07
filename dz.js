// 1.Написати скрипт відкриття та закриття модального вікна по кнопці.

//Щоб отримати доступ до будь-якого елементу HTML у js
// ми маєм застосувати getElementById("id") ,querySelector(".button")

// document - це весь наш html документ
// .querySelector() - пошуковий метод
const openButton = document.querySelector("#btn1");

// Як додати подію на елемент
openButton.addEventListener("click", onClickOpenModal);

// Створюємо обробник події

function onClickOpenModal(e) {
  //Дозволяє додати на body клас show modal
  document.body.classList.add("show-modal");
}

document.body.classList.remove("show-modal");

// 2.Використовуючи попередній код написати скрипт закриття модального вікна по кліку на бекдроп

// 3.Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно

// 4. Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

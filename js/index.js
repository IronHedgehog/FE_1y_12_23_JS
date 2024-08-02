const form = document.querySelector("#submit");

form.addEventListener("submit", onSubmit);

function onSubmit(eventObject) {
  console.log("qwe");
  //preventDefault -  Запобігти звичайному
  // Відміняє поведінку браузера за замовчуванням
  eventObject.preventDefault();
}

const form1 = document.querySelector("#form");
const checkbox = document.querySelector(".checkbox");

console.log(form1);
// change - відпрацьовує при зміні стану елементу

checkbox.addEventListener("change", onChange);

function onChange(eventObject) {
  console.log(eventObject.target.value);
}

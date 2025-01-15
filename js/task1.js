const input = document.querySelector(".input");
const div = document.querySelector(".div");

input.addEventListener("input", onInput);
// input.addEventListener("change");
// input.addEventListener("focus");
// input.addEventListener("blur");

function onInput(e) {
  // e - обʼєкт події
  // e.target - обʼєкт на якому відбулась подія
  //   console.log(e);
  const inputValue = e.target.value;
  //   console.log(inputValue);
  div.style.width = `${inputValue}px`;
}

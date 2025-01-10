// console.log(window);

// console.log(_ = lodash);
const addNumbers = _.add(6, 4);

console.log(addNumbers);

// document.addEventListener("scroll", _.throttle(scrollFunction, 250));

// let counter = 0;

// function scrollFunction(e) {
//   console.log("1");
//   counter += 1;
//   document.body.textContent = counter;
// }

const input = document.querySelector("#input");
// input - Дозволяє отримувати текст який друкує користувач
// debounce - запускає обробник подій лише один раз пілся того як користувач завершив друк тексту
input.addEventListener("input", _.debounce(onInput, 300));

let counterInput = 0;

function onInput(e) {
  console.log(e.target.value);
  counterInput += 1;
  console.log(counterInput);
}
document.addEventListener("scroll", _.debounce(scrollFunction, 250));

let counter = 0;

function scrollFunction(e) {
  console.log("1");
  counter += 1;
  document.body.textContent = counter;
}

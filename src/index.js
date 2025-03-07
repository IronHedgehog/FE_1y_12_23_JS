// setTimeout - приймає затримку у мілісекундах
// setTimeout - встановлює перерву перед виконанням коду у середині таймаут

console.log('Початок'); //синхроний код

const timeout = setTimeout(
  (a, b, c, d, e, f, g) => {
    // console.log(a, b, c, d, e, f);
    console.log('Привіт');
  },
  1000
  // 1,
  // 2,
  // 3,
  // 4,
  // 5,
  // 6
); //асинхронний

console.log(timeout);
console.log('Кінець'); //синхроний код

//let seconds = 0; // синхроний код

// const renderHtml = setInterval(() => {
//   seconds += 1;
//   // document.body.innerHTML = seconds;
//   if (seconds === 1) {
//     clearInterval(renderHtml);
//   }

//   console.log(seconds);
// }, 1000); // асинхроний код

// console.log(renderHtml);
// синхроний код

// querySelector();
// querySelectorAll();
// getElementById();

// const input = document.getElementById('input');
// const counter = document.querySelector('.counter');

// input.addEventListener('input', onInput);
// let interval;

// function onInput(e) {
//   let seconds = e.target.value;
//   console.log(seconds);

//   interval = setInterval(() => {
//     counter.innerHTML = seconds;
//     if (seconds === -1) {
//       clearInterval(interval);
//     }
//   }, 1000);
// }

const board = document.getElementById('board');
const button = document.getElementById('startGame');
const counter = document.querySelector('.counter');

button.addEventListener('click', onClick);
board.addEventListener('click', clickOnBoard);

let interval;
let score = 0;
let seconds = 10;

function onClick(e) {
  board.style.display = 'block';

  interval = setInterval(() => {
    seconds--;
    counter.innerHTML = seconds;
    if (seconds === -1) {
      clearInterval(interval);
      alert(`Гру завершено ви отримали ${score} очок`);
    }
  }, 1000);
}

function clickOnBoard(e) {
  if (!e.target.classList.contains('gameElement')) return;
  score += 200;

  e.target.style.backgroundColor = 'transparent';
  setTimeout(() => {
    e.target.style.backgroundColor = 'green';
  }, 500);
}

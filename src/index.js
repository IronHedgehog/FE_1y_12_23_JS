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

let seconds = 0; // синхроний код

const renderHtml = setInterval(() => {
  seconds += 1;
  document.body.innerHTML = seconds;
  if (seconds === 60) {
    clearInterval(renderHtml);
  }

  console.log(seconds);
}, 1000); // асинхроний код

console.log(renderHtml);
// синхроний код

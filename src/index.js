// const date = new Date('April 15,1970');

// // const newDate = new Date(year, month, day, hours, minutes, s, ms);

// console.log();
// // console.log(newYear2);
// console.log(date);
// // 2030-05-01T10:20:30 - YYYY-MM-DDTHH:MM:SS:MS
// console.log(Date.parse('2026-01-01T00:00:00')); //(1682925630000) - мс з 1970р
// console.log(Date.parse('2026-01-01T00:00:00') - Date.now()); // проміжок часу від зараз до  2026-01-01

// const time = new Date('2025-03-01');

// console.log(time.getDate()); // число місяця
// console.log(time.getDay()); // видає значення по індексу з 0 до 6 (Починає відлік з неділі, субота 6)

// console.log(time.getMonth()); // видає значення по індексу з 0 до 11

// console.log(time.getFullYear()); // рік

// console.log(time.getHours());
// console.log(time.getMinutes());
// console.log(time.getSeconds());
// console.log(time.getMilliseconds());

// console.log(time.getTime());

// console.log(time.toUTCString());
// console.log(time.getUTCDay());
// console.log(time.getUTCMonth());

// const newYear = Date.parse('2026-01-01T00:00:00');

// // console.log(newYear.toLocaleString());
// // BOM
// // const locale =
// console.log(
//   time.toLocaleString('Uk-uk', {
//     month: 'long',
//     day: '2-digit',
//     year: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
//   })
// );
// dayPeriod: 'short',
// hour12: true,

//

function timer() {
  const newYear = new Date(2026, 0, 1, 0, 0, 0, 0);
  // const nextYear = new Date().getFullYear() + 1;

  const currentTime = new Date();

  const diff = newYear - currentTime;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  console.log(days, hours, minutes, seconds);
}

// timer();

// let date = new Date().toDateString() + ' ' + new Date().toTimeString();

// console.log(date);
let start = new Date();

for (let i = 0; i < 100000; i++) {
  console.log(i);
}

let end = new Date();

console.log(`Робота циклу зайняла ${end - start}мс`);
